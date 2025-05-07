"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="hidden md:block max-w-7xl mx-auto rounded-xl sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 m-4">
        <div className="flex justify-between items-center h-16">
          {/* Left: Navigation Links */}
          <div className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
            <Link href="/login" className="hover:text-blue-600 transition">
              Login
            </Link>
          </div>

          {/* Right: User Profile */}
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
            ref={dropdownRef}
          >
            <Image
              src="/assets/images/profile1.jpg"
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-800 dark:text-white">
              John Doe
            </span>

            {showDropdown && (
              <div className="absolute right-0 top-0 mt-12 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    User Profile
                  </h3>
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="/assets/images/profile1.jpg"
                      alt="User Avatar"
                      width={60}
                      height={60}
                      className="rounded-full object-cover mb-2"
                    />
                    <p className="text-sm font-medium text-gray-800 dark:text-white">
                      John Doe
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      john@example.com
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <nav className="flex flex-col gap-3 text-sm">
                    <Link
                      href="/profile"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/inbox"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      My Inbox
                    </Link>
                    <Link
                      href="/settings"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      Settings
                    </Link>
                    <Link
                      href="/support"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      Support
                    </Link>
                  </nav>

                  <div className="mt-4">
                    <button
                      className="w-full text-sm text-white bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded"
                      onClick={() => alert("Logout clicked")}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
