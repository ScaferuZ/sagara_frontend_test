import { NavLink, Outlet, useLocation } from "react-router-dom";
import SagaraLogo from "@/assets/images/sagara-tech.png";
import {
  Squares2X2Icon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/elements/mode-toggle";

import UserDropdown from "@/components/elements/UserDropdown";

const sidebarLinks = [
  {
    name: "Dashboard",
    link: "dashboard",
    icon: <Squares2X2Icon className="h-5 w-5" />,
  },
  {
    name: "Students",
    link: "students",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
];

const CommonLayout = () => {
  const location = useLocation();
  return (
    <div className="flex h-screen w-full bg-background">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-80 flex-shrink-0 border-r border-border bg-background dark:bg-background lg:block">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <main className="flex flex-1 flex-col overflow-hidden bg-white-background dark:bg-background">
        <header className="flex items-center justify-end  px-6 py-4 space-x-4">
          <UserDropdown
            className="hidden md:flex"
            userName="Endra Lazuardi"
            userRole="Admin"
            avatarText="E"
          />
          <ModeToggle />
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Squares2X2Icon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <div className="flex-1 overflow-auto dark:bg-background bg-white-grey  p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

const Sidebar = () => (
  <div className="flex h-full flex-col">
    <div className="flex h-16 items-center justify-center mt-11 mb-12">
      <NavLink to="/dashboard">
        <img src={SagaraLogo} alt="Logo Suratku" className="h-20" />
      </NavLink>
    </div>
    <h4 className="text-left mx-4 text-grey">MENU</h4>
    <nav className="flex-1 space-y-1 px-4 py-4">
      {sidebarLinks.map((link, index) => (
        <NavLink
          key={index}
          to={`/${link.link}`}
          className={({ isActive }) =>
            cn(
              "flex items-center rounded-lg px-4 py-2 text-sm font-medium",
              isActive
                ? "bg-red text-primary-foreground dark:text-white-background"
                : "text-grey hover:bg-accent hover:text-accent-foreground"
            )
          }
        >
          {link.icon}
          <span className="ml-3">{link.name}</span>
        </NavLink>
      ))}
    </nav>
  </div>
);

export default CommonLayout;
