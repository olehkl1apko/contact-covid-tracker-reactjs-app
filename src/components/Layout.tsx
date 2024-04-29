import { Outlet } from "react-router-dom";

import { Sidebar } from "@/components/Sidebar";

const Layout = () => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <section className="h-full w-full px-5 py-4 xs:px-7 xs:py-4">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
