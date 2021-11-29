import { useState, useContext } from "react";
import Link from "next/link";
import { SidebarContext } from "./layout";

const History = () => {
  return (
    <nav className="p-2">
      <ul>
        <Year year="2022">
          <Month month="December">
            <Item path="/about" title="Article #3" color=" dark:border-green-600 border-green-400" />
            <Item path="/about" title="Article #2" color=" dark:border-purple-600 border-purple-400" />
            <Item path="/about" title="Article #1" color=" dark:border-green-600 border-green-400" />
          </Month>
          <Month month="November">
            <Item path="/about" title="Article #3" color=" dark:border-purple-600 border-purple-400" />
            <Item path="/about" title="Article #2" color=" dark:border-green-600 border-green-400" />
            <Item path="/about" title="Article #1" color=" dark:border-purple-600 border-purple-400" />
          </Month>
          <Month month="September">
            <Item path="/about" title="Article #3" color=" dark:border-green-600 border-green-400" />
            <Item path="/about" title="Article #2" color=" dark:border-purple-600 border-purple-400" />
            <Item path="/about" title="Article #1" color=" dark:border-green-600 border-green-400" />
          </Month>
        </Year>
        <Year year="2021">
          <Month month="December">
            <Item path="/about" title="Article #3" color=" dark:border-purple-600 border-purple-400" />
            <Item path="/about" title="Article #2" color=" dark:border-green-600 border-green-400" />
            <Item path="/about" title="Article #1" color=" dark:border-purple-600 border-purple-400" />
          </Month>
          <Month month="November">
            <Item path="/about" title="Article #3" color=" dark:border-green-600 border-green-400" />
            <Item path="/about" title="Article #2" color=" dark:border-purple-600 border-purple-400" />
            <Item path="/about" title="Article #1" color=" dark:border-green-600 border-green-400" />
          </Month>
          <Month month="September">
            <Item path="/about" title="Article #3" color=" dark:border-purple-600 border-purple-400" />
            <Item path="/about" title="Article #2" color=" dark:border-green-600 border-green-400" />
            <Item path="/about" title="Article #1" color=" dark:border-purple-600 border-purple-400" />
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
    <li className="rounded-sm my-4 px-2 py-1 bg-gray-200 dark:bg-gray-900">
      <button
        onClick={() => setExpand((prevExpand) => !prevExpand)}
        className="w-full text-left font-bold">
        {year}
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
    <li className="rounded-sm my-2 px-2 py-1 bg-gray-100 dark:bg-gray-800">
      <button
        onClick={() => setExpand((prevExpand) => !prevExpand)}
        className="w-full text-left italic">
        {month}
      </button>
      <ul className="ml-2">{expand && children}</ul>
    </li>
  );
};
type ItemProps = {
  path: string;
  title: string;
  color: string;
};

const Item = ({ path, title, color }: ItemProps) => {
  const { setShowSidebar } = useContext(SidebarContext);
  return (
    <li>
      <Link href={path}>
        <a>
          <div
            onClick={() => setShowSidebar(false)}
            className={
              "rounded drop-shadow border-l-4 bg-gray-100 dark:bg-gray-800 px-1.5 py-px my-1" +
              color
            }>
            {title}
          </div>
        </a>
      </Link>
    </li>
  );
};

type SidebarProps = {
  show: boolean;
};

const Sidebar = ({ show }: SidebarProps) => {
  return (
    <aside
      className={
        "lg:w-80 lg:ml-auto lg:flex-none lg:block lg:sticky" +
        " bg-gray-100 dark:bg-gray-800 z-10 inset-0 h-screen fixed" +
        " max-w-xs w-5/6 overflow-y-scroll" +
        (show ? "" : " hidden")
      }>
      <History />
    </aside>
  );
};
export default Sidebar;
