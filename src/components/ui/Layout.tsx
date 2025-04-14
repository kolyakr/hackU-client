import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <main className="flex-1 wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
