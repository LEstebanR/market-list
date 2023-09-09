import Link from "next/link";
import React from "react";
import { BiStore } from "react-icons/bi";

export default function Logo(): React.ReactElement {
  return (
    <Link href="/">
      <div className="flex items-center justify-center rounded-md border-2 border-secondary p-1">
        <BiStore className="text-3xl text-primary" />
      </div>
    </Link>
  );
}
