"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  TicketIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Swal from "sweetalert2";

import "./sidebar.css"; // <- Make sure this path is correct
import { useRouter } from "next/navigation";
import { useState } from "react";

const Sidebar = ({ logoSrc, brandName, avatarSrc, userName = "John Doe" }) => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle for logout
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your session.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out!",
          text: "You have been successfully logged out.",
          icon: "success",
          allowOutsideClick: false,
        }).then(() => {
          router.push("/login");
        });
      }
    });
  };

  // Handle for dropdown
  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-900 grid grid-rows-[auto_1fr_auto] pr-4 py-6">
      {/* Top: Logo */}
      <div className="mb-6">
        <Link href="/" className="flex items-center px-4">
          {/* {logoSrc && (
            <Image
              src={logoSrc}
              alt="Logo"
              width={120}
              height={32}
              className="h-auto"
            />
          )} */}
          {brandName && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>
              <span className="ml-2 tracking-widest font-serif text-2xl font-semibold text-wrap">
                {brandName}
              </span>
            </>
          )}
        </Link>
      </div>

      {/* Middle: Navigation Items */}
      <nav className="flex flex-col gap-2 overflow-y-auto">
        <span className="text-xs text-gray-500 ml-4 font-roboto font-light">
          HOME
        </span>
        <Link
          href="/"
          className="sidebar-item dashboard"
          aria-label="Dashboard"
        >
          <HomeIcon className="icon" />
          <span className="text font-roboto font-light">Dashboard</span>
        </Link>

        {/* EPS Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown("eps")}
            className="sidebar-item accounts justify-between w-full text-left cursor-pointer"
            aria-label="Eps"
          >
            <div className="flex items-center">
              <UserIcon className="icon" />
              <span className="text font-roboto font-light">EPS</span>
            </div>
            {openDropdown === "eps" ? (
              <ChevronUpIcon className="w-4 h-4 icondropdown" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 icondropdown" />
            )}
          </button>
          {openDropdown === "eps" && (
            <div className="ml-10 mt-1 flex flex-col text-sm gap-1">
              <button
                onClick={() => router.push("/eps/list")}
                className="text-left hover:no-underline text-gray-600 dark:text-gray-300 py-2 pl-2 cursor-pointer"
              >
                Organization
              </button>
              {/* <Link
                href="/eps/create"
                className="hover:no-underline text-gray-600 dark:text-gray-300 py-2 pl-2"
              >
                <li>Option2</li>
              </Link> */}
            </div>
          )}
        </div>

        {/* HRS Dropdown */}
        <div>
          <button
            onClick={() => toggleDropdown("hrs")}
            className="sidebar-item tickets justify-between w-full text-left cursor-pointer"
            aria-label="Hrs"
          >
            <div className="flex items-center">
              <TicketIcon className="icon" />
              <span className="text font-roboto font-light">HRIS</span>
            </div>
            {openDropdown === "hrs" ? (
              <ChevronUpIcon className="w-4 h-4 icondropdown" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 icondropdown" />
            )}
          </button>
          {openDropdown === "hrs" && (
            <div className="ml-10 mt-1 flex flex-col text-sm gap-1">
              <button
                onClick={() => router.push("/hris/schedule")}
                className="text-left hover: no-underline text-gray-600 dark:text-gray-300 py-2 pl-2 cursor-pointer"
              >
                Organization
              </button>
              {/* <Link
                href="/hrs/reports"
                className="hover: no-underline text-gray-600 dark:text-gray-300 py-2"
              >
                <li>Option2</li>
              </Link> */}
            </div>
          )}
        </div>

        <Link
          href="/settings"
          className="sidebar-item settings"
          aria-label="Settings"
        >
          <Cog6ToothIcon className="icon" />
          <span className="text font-roboto font-light">Settings</span>
        </Link>

        {/* {[
          {
            name: "Dashboard",
            icon: HomeIcon,
            href: "/",
            className: "dashboard",
          },
          {
            name: "Eps",
            icon: UserIcon,
            href: "#",
            className: "accounts",
          },
          {
            name: "Hrs",
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
            <span className="text font-roboto font-light">{item.name}</span>
          </Link>
        ))} */}
      </nav>

      {/* Bottom: User Info */}
      <div className="flex items-center mt-6 border-none rounded-xl bg-blue-100 ml-4 py-4 dark:border-gray-700">
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
          <span className="text-sm font-roboto font-medium text-gray-800 dark:text-gray-200">
            {userName}
          </span>
        </Link>
        {/* Optional logout button */}
        <button
          className="px-4 py-2 text-sm text-left text-red-600 hover:underline cursor-pointer"
          onClick={handleLogout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
