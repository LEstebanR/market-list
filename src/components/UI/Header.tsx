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
import { usePathname } from "next/navigation";

const options = [
  { label: "Features", value: "option-1" },
  { label: "Constumers", value: "option-2" },
  { label: "Integrations", value: "option-3" },
];

export function Header(): React.ReactElement {
  const { systemTheme, theme, setTheme } = useTheme();
  const pathName = usePathname();

  console.log(pathName);
  return (
    <Navbar
      className="navbar flex justify-between bg-light p-0 dark:bg-dark lg:w-8/12"
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
      {pathName !== "/login" && (
        <NavbarItem className="hidden sm:flex">
          <Button as={Link} color="primary" href="/login" variant="bordered">
            Login
          </Button>
        </NavbarItem>
      )}

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
                className="text-black dark:text-white"
              />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="shadow"
            className="rounded-xl dark:bg-dark dark:text-light"
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
              {pathName !== "/login" ? (
                <DropdownItem textValue="Login button">
                  <Button
                    as={Link}
                    color="primary"
                    href="/login"
                    fullWidth
                    variant="bordered"
                  >
                    Login
                  </Button>
                </DropdownItem>
              ) : (
                <DropdownItem textValue="Sign Up button">
                  <Button as={Link} color="primary" href="#" fullWidth>
                    Sign Up
                  </Button>
                </DropdownItem>
              )}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Navbar>
  );
}
