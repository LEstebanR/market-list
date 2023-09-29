"use client";

import React, { FC } from "react";
import EmailField from "../fieds/email-field";
import PasswordField from "../fieds/password-field";
import Link from "next/link";
import { Subtitle } from "../UI/Typography";
import { Button } from "@nextui-org/react";

const LoginForm: FC = () => {
  return (
    <form className="flex flex-col items-center gap-4 rounded-lg px-4 pb-16 pt-8 shadow-complete shadow-secondary">
      <Subtitle color="primary">Login</Subtitle>
      <EmailField />
      <PasswordField />
      <Link href="/forgot-password" className="text-blue-600 underline">
        Forgot your password?
      </Link>
      <Button color="primary" variant="solid" className="w-full">
        Login
      </Button>
      <span>
        Not a member yet?{" "}
        <Link href="/sign-in" className="text-blue-600 underline">
          Sign Up Here
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
