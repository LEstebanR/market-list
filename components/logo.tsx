import React from "react";
import { BuildingStorefrontIcon } from "@heroicons/react/20/solid";

const Logo: React.FC = () => {
  return (
    <div className="border-2 border-primary rounded-lg p-1">
      <BuildingStorefrontIcon className="h-6 w-6 text-primary" />
    </div>
  );
};

export default Logo;
