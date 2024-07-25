"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Prevents rendering on the server to avoid mismatch
  if (!mounted) return null;

  return (
    <div
      onClick={toggleTheme}
      className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-300 focus:outline-none ${
        theme === "dark" ? "bg-[#135D66]" : "bg-gray-300"
      }`}
    >
      <span className="sr-only">Toggle Theme</span>
      <span
        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
          theme === "dark" ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {theme === "dark" ? (
          <MoonIcon className="absolute h-4 w-4 text-gray-800" />
        ) : (
          <SunIcon className="absolute h-4 w-4 text-yellow-500" />
        )}
      </span>
    </div>
  );
};

export default ThemeToggle;
