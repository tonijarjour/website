import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-prose mx-auto">
      <Header />
      <main className="min-h-95vh pt-6 px-3">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
