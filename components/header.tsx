import { useState, useEffect } from "react";
import Link from "next/link";
import Sun from "./icons/sun";
import Moon from "./icons/moon";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    document.querySelector("html")!.classList.toggle("dark");
  }, [darkMode]);
  return (
    <header className="sticky top-0 bg-white dark:bg-gray-800">
      <nav
        className={
          "flex justify-between font-bold mx-auto max-w-prose p-2" +
          " items-end space-x-3"
        }>
        <Link href="/">
          <a className="text-2xl">Toni Jarjour</a>
        </Link>
        <span className="space-x-3">
          <Link href="/about">
            <a>About</a>
          </Link>
          <button
            className="text-indigo-500 dark:text-yellow-300 align-text-bottom"
            aria-label="dark light mode switch"
            onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}>
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </span>
      </nav>
    </header>
  );
};

export default Header;
