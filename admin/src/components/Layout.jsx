import { Outlet } from "react-router-dom";
import Sidebar from "./Siderbar";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <div className="flex bg-slate-100">
        <Sidebar />
        <Navbar />
        <div className="h-full w-full pt-20">
          <Outlet />
        </div>
      </div>
    </>
  );
}
