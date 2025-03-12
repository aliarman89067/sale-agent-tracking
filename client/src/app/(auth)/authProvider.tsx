"use client";
import react, { PropsWithChildren, useEffect } from "react";
import {
  Authenticator,
  Heading,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import Image from "next/image";
import { BackButton } from "@/components/BackButton";
import { usePathname } from "next/navigation";
import { AuthToggler } from "./AuthToggler";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
    },
  },
});

const formFields = {
  signUp: {
    username: {
      placeholder: "Enter your name",
      label: "User name",
      isRequired: true,
      order: 1,
    },
    email: {
      placeholder: "Enter your email",
      label: "Email",
      isRequired: true,
      order: 2,
    },
    password: {
      placeholder: "Enter your password",
      label: "Password",
      isRequired: true,
      order: 3,
    },
  },
};

const components = {
  SignIn: {
    Header() {
      return (
        <View>
          <Heading className="font-jacquesFrancois font-semibold text-primaryGray text-lg">
            Logo
          </Heading>
          <Heading className="font-medium text-secondaryGray text-xl">
            Sign In as Admin
          </Heading>
        </View>
      );
    },
    Footer() {
      const { toSignUp, toForgotPassword } = useAuthenticator();
      return (
        <View className="mt-2 text-center">
          <span
            onClick={toForgotPassword}
            className="text-sm font-medium text-primary cursor-pointer hover:underline my-3"
          >
            Forgot Password?
          </span>
          <p className="text-muted-foreground">
            Don&apos;t have an account?{" "}
            <button
              onClick={toSignUp}
              className="text-primary hover:underline bg-transparent border-none p-0"
            >
              Sign up here
            </button>
          </p>
        </View>
      );
    },
  },
  SignUp: {
    Header() {
      return (
        <View>
          <Heading className="font-jacquesFrancois font-semibold text-primaryGray text-lg">
            Logo
          </Heading>
          <Heading className="font-medium text-secondaryGray text-xl">
            Sign Up as Admin
          </Heading>
        </View>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <View className="mt-4 text-center">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <button
              onClick={toSignIn}
              className="text-primary hover:underline bg-transparent border-none p-0"
            >
              Sign in here
            </button>
          </p>
        </View>
      );
    },
  },
  ForgotPassword: {
    Header() {
      return (
        <View>
          <Heading className="font-jacquesFrancois font-semibold text-primaryGray text-lg">
            Logo
          </Heading>
          <Heading className="font-medium text-secondaryGray text-xl">
            Reset Your Password
          </Heading>
        </View>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <View className="mt-4 text-center">
          <button
            onClick={toSignIn}
            className="text-primary hover:underline bg-transparent border-none p-0"
          >
            Go Back
          </button>
        </View>
      );
    },
  },
};

const Auth = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const isAdminLogin = true;
  return (
    <div className="relative flex w-full h-screen justify-between">
      <div className="absolute w-[50%] top-6 left-14">
        <div className="flex flex-col w-[90%]">
          <BackButton title="Back" href="/" />
          <AuthToggler />
        </div>
      </div>
      <Authenticator
        initialState="signUp"
        components={components}
        formFields={formFields}
        loginMechanisms={["email"]}
      >
        {() => <>{children}</>}
      </Authenticator>
      <div className="fixed top-0 right-0 w-[50%] h-full bg-purple-400 flex items-center justify-center">
        <Image
          src="/authPageBackground.jpg"
          alt="Auth Page Backgorund Image"
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Auth;
