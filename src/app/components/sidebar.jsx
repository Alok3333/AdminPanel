"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";

import "./sidebar.css"; // <- Make sure this path is correct

const Sidebar = ({ logoSrc, avatarSrc, userName = "John Doe" }) => {
  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-900 grid grid-rows-[auto_1fr_auto] px-4 py-6">
      {/* Top: Logo */}
      <div className="mb-6">
        <Link href="/" className="flex items-center">
          {logoSrc && (
            <Image
              src={logoSrc}
              alt="Logo"
              width={120}
              height={32}
              className="h-auto"
            />
          )}
        </Link>
      </div>

      {/* Middle: Navigation Items */}
      <nav className="flex flex-col gap-2 overflow-y-auto">
        {[
          {
            name: "Dashboard",
            icon: HomeIcon,
            href: "#",
            className: "dashboard",
          },
          {
            name: "Accounts",
            icon: UserIcon,
            href: "#",
            className: "accounts",
          },
          {
            name: "Tickets",
            icon: TicketIcon,
            href: "#",
            className: "tickets",
          },
          {
            name: "Settings",
            icon: Cog6ToothIcon,
            href: "#",
            className: "settings",
          },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`sidebar-item ${item.className}`}
            aria-label={item.name}
          >
            <item.icon className="icon" />
            <span className="text">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom: User Info */}
      <div className="mt-6 border-t pt-4 dark:border-gray-700">
        <Link href="#" className="flex items-center gap-3 px-4 py-2">
          {avatarSrc && (
            <Image
              src={avatarSrc}
              alt="User Avatar"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
          )}
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
            {userName}
          </span>
        </Link>
        {/* Optional logout button */}
        <button className="w-full mt-4 px-4 py-2 text-sm text-left text-red-600 hover:underline">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
