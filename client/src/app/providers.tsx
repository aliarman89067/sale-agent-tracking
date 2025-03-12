"use client";
import React, { PropsWithChildren } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import Auth from "./(auth)/authProvider";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Authenticator.Provider>
      <Auth>{children}</Auth>
    </Authenticator.Provider>
  );
};
