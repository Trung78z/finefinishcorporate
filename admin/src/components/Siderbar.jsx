import { nav } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  return (
    <>
      <div className="hidden max-h-screen min-h-screen min-w-60 flex-col gap-y-6 bg-background sm:flex">
        <div>
          <div className="flex items-center justify-center pt-2">
            <Link to="/">
              <h2 className="text-xl font-semibold text-green-500">
                Trang chủ bài viết
              </h2>
            </Link>
          </div>
          <hr />
        </div>
        <nav>
          <ul className="flex flex-col items-center *:border-b">
            {nav.map((item) => (
              <li
                key={item.id}
                className={cn(
                  `s w-full py-2 text-center`,
                  `/${path}` === item.href && "bg-slate-100",
                )}
              >
                <Link to={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
