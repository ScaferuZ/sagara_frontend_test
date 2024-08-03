import React from "react";
import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface UserNavProps {
  userName: string;
  userRole: string;
  avatarText: string;
  className?: string;
}

const UserNav: React.FC<UserNavProps> = ({
  userName,
  userRole,
  avatarText,
  className,
}) => {
  const dropdownItems = [
    {
      label: "Change Password",
      navigate: "/admin/change-password",
    },
    { label: "Edit Profile", navigate: "/admin/profile/edit" },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Button variant="ghost" size="icon">
        <BellIcon className="h-5 w-5" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 p-1">
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium">{userName}</span>
              <span className="text-xs text-right text-muted-foreground">{userRole}</span>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarFallback>{avatarText}</AvatarFallback>
            </Avatar>
            <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          {dropdownItems.map((item, index) => (
            <DropdownMenuItem key={index} asChild>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-accent" : undefined
                }
                to={item.navigate}
              >
                {item.label}
              </NavLink>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserNav;
