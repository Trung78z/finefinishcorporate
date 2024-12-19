import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav } from "@/lib/data";
import { MdOutlineMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <div className="fixed left-0 right-0 top-0 flex h-16 items-center bg-background px-2 sm:left-60 sm:px-10">
      <div className="flex items-center gap-2">
        {" "}
        <Sheet key="left">
          <SheetTrigger className="block sm:hidden">
            <MdOutlineMenu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center justify-center pt-2">
                  <h2 className="text-xl font-semibold text-green-500">
                    Trang chủ bài viết
                  </h2>
                </div>
                <hr />
              </SheetTitle>
              <SheetDescription>
                <nav>
                  <ul className="flex flex-col items-center gap-4 *:border-b">
                    {nav.map((item) => (
                      <li key={item.id} className="w-full pb-2 text-center">
                        <SheetClose className="w-full" asChild>
                          <Link to={item.href}>{item.title}</Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        {nav.map((item) => item.href === pathname && item.title)}
        {pathname === "/posts/add" && (
          <h2 className="text-2xl font-medium">Thêm bài viết</h2>
        )}
      </div>
    </div>
  );
}
