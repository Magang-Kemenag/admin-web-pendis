import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const path = pathname.split("/");
  console.log(path[path.length - 1]);
  function hiddenSidebar(path) {
    if (path == "login") {
      return "hidden";
    }
  }
  return (
    <div className="flex bg-[#F8F7FA]">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div className={hiddenSidebar(path[path.length - 1])}>
            <Navbar />
          </div>
          <Component {...pageProps} />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className={hiddenSidebar(path[path.length - 1])}>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
