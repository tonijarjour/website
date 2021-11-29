import Link from "next/link";
import Sun from "./icons/sun";
import Moon from "./icons/moon";

type HeaderProps = {
  setDarkMode: Function;
  darkMode: boolean;
};

const Header = ({ setDarkMode, darkMode }: HeaderProps) => {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 sticky top-0">
      <nav
        className={
          "font-bold max-w-prose py-2 px-2 flex" +
          " justify-between items-end mx-auto"
        }>
        <Link href="/">
          <a>
            <h1 className="text-2xl">Toni Jarjour</h1>
          </a>
        </Link>
        <div className="flex-inline space-x-3">
          <Link href="/about">
            <a>About</a>
          </Link>
          <button
            className="text-indigo-500 dark:text-yellow-300"
            onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
