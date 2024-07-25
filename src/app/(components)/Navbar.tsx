"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import ShineBorder from "./ShineBorder";
import { useTheme } from "next-themes";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const theme = useTheme();
  return (
    <ShineBorder
      className="w-full"
      color={theme.theme === "dark" ? "#E3FEF7" : "#003C43"}
      borderRadius={0}
      borderWidth={1}
    >
      <header className="bg-white dark:bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <span className="text-2xl font-bold text-[#003C43] dark:text-[#E3FEF7]">
                  SMF.
                </span>
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link
                href="/"
                className="text-gray-900 dark:text-[#E3FEF7] hover:text-gray-700 dark:hover:text-[#77B0AA] inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 dark:text-[#E3FEF7] hover:text-gray-700 dark:hover:text-[#77B0AA] inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-gray-900 dark:text-[#E3FEF7] hover:text-gray-700 dark:hover:text-[#77B0AA] inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="bg-[#135D66] text-white inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-[#003C43]"
              >
                Contact
              </Link>
              <ThemeToggle />
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#135D66]">
                    Menu
                    <ChevronDownIcon
                      className="ml-2 -mr-1 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/"
                            className={classNames(
                              active
                                ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                                : "text-gray-700 dark:text-gray-300",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Home
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/about"
                            className={classNames(
                              active
                                ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                                : "text-gray-700 dark:text-gray-300",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            About
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/projects"
                            className={classNames(
                              active
                                ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                                : "text-gray-700 dark:text-gray-300",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Projects
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/contact"
                            className={classNames(
                              active
                                ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                                : "text-gray-700 dark:text-gray-300",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Contact
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className="block px-4 py-2 text-sm">
                            <ThemeToggle />
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </ShineBorder>
  );
};

export default Navbar;
