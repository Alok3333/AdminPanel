"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function SidebarContainer({
  logoSrc,
  brandName,
  avatarSrc,
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* {Toggle Button} */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <XMarkIcon className="absolute left-50 w-6 h-6 text-gray-900 dark:text-white" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-gray-900 dark:text-white" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-700
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 md:flex-shrink-0`}
      >
        <Sidebar
          logoSrc={logoSrc}
          brandName={brandName}
          avatarSrc={avatarSrc}
          userName="Pawan Seen"
        />
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-blue-50 dark:bg-gray-800 md:ml-0">
        {children}
      </main>
    </div>
  );
}
