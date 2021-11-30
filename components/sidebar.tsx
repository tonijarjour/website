import { useState, useContext } from "react";
import Link from "next/link";
import { SidebarContext } from "./layout";

const History = () => {
  return (
    <nav className="px-3">
      <ul>
        <Year year="2022">
          <Month month="December">
            <Item path="/about" title="Article #3" />
            <Item path="/about" title="Article #2" />
            <Item path="/about" title="Article #1" />
          </Month>
          <Month month="November">
            <Item path="/about" title="Article #3" />
            <Item path="/about" title="Article #2" />
            <Item path="/about" title="Article #1" />
          </Month>
          <Month month="September">
            <Item path="/about" title="Article #3" />
            <Item path="/about" title="Article #2" />
            <Item path="/about" title="Article #1" />
          </Month>
        </Year>
        <Year year="2021">
          <Month month="December">
            <Item path="/about" title="Article #3" />
            <Item path="/about" title="Article #2" />
            <Item path="/about" title="Article #1" />
          </Month>
          <Month month="November">
            <Item path="/about" title="Article #3" />
            <Item path="/about" title="Article #2" />
            <Item path="/about" title="Article #1" />
          </Month>
          <Month month="September">
            <Item path="/about" title="Article #3" />
            <Item path="/about" title="Article #2" />
            <Item path="/about" title="Article #1" />
          </Month>
        </Year>
        <Year year="2021">
          <Month month="December">
            <Item path="/about" title="Article #3" />
            <Item path="/about" title="Article #2" />
            <Item path="/about" title="Article #1" />
          </Month>
          <Month month="November">
            <Item path="/about" title="Article #3" />
            <Item path="/about" title="Article #2" />
            <Item path="/about" title="Article #1" />
          </Month>
          <Month month="September">
            <Item path="/about" title="Article #3" />
            <Item path="/about" title="Article #2" />
            <Item path="/about" title="Article #1" />
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
        className="font-bold">
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
    <li className="my-2">
      <button
        onClick={() => setExpand((prevExpand) => !prevExpand)}
        className="italic">
        {month}
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
  color = " border-blue-300 dark:border-indigo-500",
}: ItemProps) => {
  const { setShowSidebar } = useContext(SidebarContext);
  return (
    <li className="my-1.5">
      <Link href={path}>
        <a
          className={"border-l-4 pl-1.5" + color}
          onClick={() => setShowSidebar(false)}>
          {title}
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
        " z-10 bg-white dark:bg-gray-800 w-5/6 max-w-xs" +
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
