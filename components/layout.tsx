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
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : "light"}>
      <div
        className={
          "text-xl lg:flex antialiased text-gray-800" +
          " dark:text-gray-300 bg-gray-100 dark:bg-gray-800"
        }>
        <SidebarContext.Provider value={{ setShowSidebar: setShowSidebar }}>
          <Sidebar show={showSidebar} />
        </SidebarContext.Provider>
        <div
          className="mx-auto lg:mr-auto lg:ml-0 max-w-5xl w-full"
          onClick={() => setShowSidebar(false)}>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <main className="px-3 min-h-screen max-w-prose mx-auto pt-6">
            {children}
          </main>
          <Footer />
        </div>
      </div>
      <button
        className={
          "fixed bottom-0 right-0 text-gray-300 lg:hidden bg-gray-900" +
          " rounded-full p-2 m-4"
        }
        onClick={() => setShowSidebar((prevShowSidebar) => !prevShowSidebar)}>
        <List />
      </button>
    </div>
  );
};

export default Layout;
