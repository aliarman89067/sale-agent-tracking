import { UserSchemaType } from "@/lib/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
  }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({
    getAuthUser: build.query<UserSchemaType, void>({
      queryFn: async (_, _api, _extraOptions, fetchWithBQ) => {
        const session = await fetchAuthSession();
        const { idToken } = session.tokens ?? {};
        const userRole = idToken?.payload["custom:role"];
        const user = await getCurrentUser();
        const endpoint =
          userRole === "admin"
            ? `/admin/${user.userId}`
            : `/agent/${user.userId}`;
        const getUserDetails = await fetchWithBQ(endpoint);
        return {
          data: {
            email: "ali@gmail.com",
            adminName: "ali",
            imageUrl: "sadsad",
            role: "agent",
          },
        };
      },
    }),
  }),
});

export const { useGetAuthUserQuery } = api;
