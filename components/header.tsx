import { useState, useEffect } from "react";
import { Sun, Moon } from "./icons";
import Link from "next/link";

const Header = () => {
  const [modeIcon, setModeIcon] = useState(<Sun />);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const userMode = window.localStorage.getItem("darkMode");
      return userMode ? JSON.parse(userMode) : true;
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.querySelector("html")!.classList.toggle("dark", darkMode);
    setModeIcon(darkMode ? <Sun /> : <Moon />);
  }, [darkMode]);

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-800 min-h-5vh">
      <nav className="flex justify-between font-bold space-x-3 items-end p-2">
        <Link href="/">
          <a className="text-2xl">Toni Jarjour</a>
        </Link>
        <span className="space-x-3">
          <Link href="/publications">
            <a className="">Publications</a>
          </Link>
          <button
            className="text-indigo-500 dark:text-yellow-300 align-text-bottom"
            aria-label="dark light mode switch"
            onClick={() =>
              setDarkMode((prevDarkMode: boolean) => !prevDarkMode)
            }>
            {modeIcon}
          </button>
        </span>
      </nav>
    </header>
  );
};

export default Header;
