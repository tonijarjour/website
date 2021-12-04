import { useState, useContext } from "react";
import Link from "next/link";
import { SidebarContext } from "./layout";

const History = () => {
  return (
    <nav className="px-3">
      <ul>
        <Year year="2021">
          <Month month="December">
            <Item path="/publications/DEC21/nextjs-tailwind-guide" title="How to start a website with Next.js and TailwindCSS" />
            <Item path="/about" title="About Me" />
          </Month>
        </Year>
      </ul>
    </nav>
  );
};

type YearProps = {
  children: React.ReactNode;
  year: string;
};

const Year = ({ children, year }: YearProps) => {
  const [expand, setExpand] = useState(true);
  return (
    <li className="my-4">
      <button
        onClick={() => setExpand((prevExpand) => !prevExpand)}
        className="font-bold w-full text-left">
        {year}
        <span className="font-normal text-gray-500"> »</span>
      </button>
      <ul className="ml-1">{expand && children}</ul>
    </li>
  );
};

type MonthProps = {
  children: React.ReactNode;
  month: string;
};

const Month = ({ children, month }: MonthProps) => {
  const [expand, setExpand] = useState(true);
  return (
    <li className="my-2">
      <button
        onClick={() => setExpand((prevExpand) => !prevExpand)}
        className="italic w-full text-left">
        {month}
        <span className="not-italic text-gray-500"> »</span>
      </button>
      <ul className="ml-2">{expand && children}</ul>
    </li>
  );
};

type ItemProps = {
  path: string;
  title: string;
  color?: string;
};

const Item = ({
  path,
  title,
  color = " border-blue-400 dark:border-indigo-500",
}: ItemProps) => {
  const { setShowSidebar } = useContext(SidebarContext);
  return (
    <li
      className={
        "my-1.5 dark:hover:bg-opacity-40 hover:bg-opacity-40" +
        " hover:bg-indigo-100 dark:hover:bg-gray-700 px-1 py-0.5"
      }>
      <Link href={path}>
        <a>
          <div onClick={() => setShowSidebar(false)}>
            <span className={"border-l-4 px-1.5" + color}>{title}</span>
          </div>
        </a>
      </Link>
    </li>
  );
};

type SidebarProps = {
  showSidebar: boolean;
};

const Sidebar = ({ showSidebar }: SidebarProps) => {
  return (
    <aside
      className={
        "lg:ml-auto lg:sticky lg:block fixed inset-0" +
        " z-20 bg-white dark:bg-gray-800 w-5/6 max-w-xs" +
        " overflow-y-auto h-screen" +
        (showSidebar ? "" : " hidden")
      }>
      <div className="lg:h-5/6 lg:overflow-y-scroll lg:mt-12">
        <History />
      </div>
    </aside>
  );
};

export default Sidebar;
