"use client";

import { Input } from "@nextui-org/react";
import React, { FC } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";

const PasswordField: FC = () => {
  return (
    <Input
      type="password"
      placeholder="Password"
      labelPlacement="outside"
      startContent={<LockClosedIcon className="h-6 w-6" />}
      classNames={{
        label: "text-sm",
        input: "text-sm bg-transparent",
        inputWrapper: "border border-gray-500 rounded-md",
      }}
    />
  );
};

export default PasswordField;
