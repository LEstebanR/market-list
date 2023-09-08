"use client";

import React, { useState } from "react";
import Logo from "@/components/logo";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import MobileMenu from "./mobile-menu";

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="h-12 w-full px-4 py-2 z-0">
      <nav className="flex justify-between w-full">
        <Logo />
        <button className="flex items-center">
          <Bars3Icon
            className="h-8 w-8 text-primary"
            onClick={() => setShowMobileMenu(true)}
          />
          {showMobileMenu && <MobileMenu setShow={setShowMobileMenu} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
