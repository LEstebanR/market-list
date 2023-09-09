"use client";

import React, { FC } from "react";
import { Input } from "@nextui-org/react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const EmailField: FC = () => {
  return (
    <Input
      type="email"
      placeholder="Email"
      labelPlacement="outside"
      startContent={<EnvelopeIcon className="h-6 w-6" />}
      classNames={{
        label: "text-sm",
        input: "text-sm bg-transparent",
        inputWrapper: "border border-gray-500 rounded-md",
      }}
    />
  );
};

export default EmailField;
