import { useState, createContext } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";
import List from "./icons/list";

type SidebarContextType = {
  setShowSidebar: Function;
};

export const SidebarContext = createContext({} as SidebarContextType);

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="lg:flex">
      <SidebarContext.Provider value={{ setShowSidebar: setShowSidebar }}>
        <Sidebar showSidebar={showSidebar} />
      </SidebarContext.Provider>
      <div
        className="mx-auto lg:mr-auto lg:ml-0 max-w-4xl w-full"
        onClick={() => setShowSidebar(false)}>
        <Header />
        <main className="max-w-prose mx-auto pt-6 px-3">
          {children}
        <Footer />
        </main>
      </div>
      <button
        className={
          "fixed bottom-0 right-0 p-2 m-4 rounded-full bg-gray-900" +
          " text-gray-300 lg:hidden"
        }
        aria-label="toggle sidebar"
        onClick={() => setShowSidebar((prevShowSidebar) => !prevShowSidebar)}>
        <List />
      </button>
    </div>
  );
};

export default Layout;
