import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownSection,
  DropdownItem,
  DropdownMenu,
  Switch,
} from "@nextui-org/react";
import Logo from "./Logo";
import { MdDensityMedium } from "react-icons/md";
import { GoSun, GoMoon } from "react-icons/go";
import { useTheme } from "next-themes";

const options = [
  { label: "Features", value: "option-1" },
  { label: "Constumers", value: "option-2" },
  { label: "Integrations", value: "option-3" },
];

export function Header(): React.ReactElement {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <Navbar
      className="bg-light dark:bg-dark lg:w-8/12 flex justify-between p-0 navbar"
      maxWidth="full"
    >
      <NavbarBrand className="px-0">
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden md:flex">
        {options.map((option, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href="#" className="dark:text-white">
              {option.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarItem>
        <Switch
          defaultSelected={systemTheme === "light" ? true : false}
          size="lg"
          color="secondary"
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <GoSun className={className} />
            ) : (
              <GoMoon className={className} />
            )
          }
        ></Switch>
      </NavbarItem>
      <NavbarItem className="hidden sm:flex">
        <Button as={Link} color="primary" href="#" variant="bordered">
          Login
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button
          className="hidden sm:flex"
          as={Link}
          color="primary"
          href="#"
          variant="solid"
        >
          Sign Up
        </Button>
      </NavbarItem>
      <div className="sm:hidden">
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly size="md" variant="bordered">
              <MdDensityMedium
                size={24}
                className="dark:text-white text-black"
              />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="shadow"
            className="dark:bg-dark dark:text-light rounded-xl"
            aria-label="Dropdown menu"
          >
            <DropdownSection showDivider>
              {options.map((option, index) => (
                <DropdownItem textValue={option.label} key={option.label}>
                  <Link color="foreground" href="#" className="dark:text-white">
                    {option.label}
                  </Link>
                </DropdownItem>
              ))}
            </DropdownSection>
            <DropdownSection>
              <DropdownItem textValue="Login button">
                <Button
                  as={Link}
                  color="primary"
                  href="#"
                  fullWidth
                  variant="bordered"
                >
                  Login
                </Button>
              </DropdownItem>
              <DropdownItem textValue="Sign Up button">
                <Button as={Link} color="primary" href="#" fullWidth>
                  Sign Up
                </Button>
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Navbar>
  );
}
