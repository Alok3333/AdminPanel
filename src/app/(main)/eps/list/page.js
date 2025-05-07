"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EpsListPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const data = [
    {
      id: 1,
      name: "Organization Alpha",
      email: "alpha@example.com",
      members: 15,
      status: "Active",
    },
    {
      id: 2,
      name: "Beta Org",
      email: "beta@example.com",
      members: 8,
      status: "Pending",
    },
    {
      id: 3,
      name: "Gamma Group",
      email: "gamma@example.com",
      members: 24,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Delta Associates",
      email: "delta@example.com",
      members: 18,
      status: "Active",
    },
    {
      id: 5,
      name: "Epsilon Inc.",
      email: "epsilon@example.com",
      members: 12,
      status: "Pending",
    },
    {
      id: 6,
      name: "Zeta Partners",
      email: "zeta@example.com",
      members: 30,
      status: "Active",
    },
    {
      id: 7,
      name: "Eta Solutions",
      email: "eta@example.com",
      members: 7,
      status: "Inactive",
    },
    {
      id: 8,
      name: "Theta Corp",
      email: "theta@example.com",
      members: 16,
      status: "Active",
    },
    {
      id: 9,
      name: "Iota Systems",
      email: "iota@example.com",
      members: 22,
      status: "Pending",
    },
    {
      id: 10,
      name: "Kappa Group",
      email: "kappa@example.com",
      members: 5,
      status: "Inactive",
    },
    {
      id: 11,
      name: "Lambda Networks",
      email: "lambda@example.com",
      members: 13,
      status: "Active",
    },
    {
      id: 12,
      name: "Mu Enterprises",
      email: "mu@example.com",
      members: 20,
      status: "Pending",
    },
    {
      id: 13,
      name: "Nu Dynamics",
      email: "nu@example.com",
      members: 17,
      status: "Active",
    },
    {
      id: 14,
      name: "Xi Labs",
      email: "xi@example.com",
      members: 9,
      status: "Inactive",
    },
    {
      id: 15,
      name: "Omicron Org",
      email: "omicron@example.com",
      members: 14,
      status: "Active",
    },
    {
      id: 16,
      name: "Pi Group",
      email: "pi@example.com",
      members: 6,
      status: "Pending",
    },
    {
      id: 17,
      name: "Rho Team",
      email: "rho@example.com",
      members: 21,
      status: "Active",
    },
    {
      id: 18,
      name: "Sigma Partners",
      email: "sigma@example.com",
      members: 19,
      status: "Inactive",
    },
    {
      id: 19,
      name: "Tau Alliance",
      email: "tau@example.com",
      members: 10,
      status: "Pending",
    },
    {
      id: 20,
      name: "Upsilon United",
      email: "upsilon@example.com",
      members: 27,
      status: "Active",
    },
    {
      id: 21,
      name: "Phi Works",
      email: "phi@example.com",
      members: 11,
      status: "Pending",
    },
    {
      id: 22,
      name: "Chi Org",
      email: "chi@example.com",
      members: 26,
      status: "Active",
    },
    {
      id: 23,
      name: "Psi Systems",
      email: "psi@example.com",
      members: 3,
      status: "Inactive",
    },
    {
      id: 24,
      name: "Omega Solutions",
      email: "omega@example.com",
      members: 29,
      status: "Active",
    },
  ];

  const statusColors = {
    Active: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Inactive: "bg-red-100 text-red-700",
  };

  // Pagination logic
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handleRowClick = (id) => {
    router.push(`/organizations/${id}`);    
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
        EPS Organizations
      </h1>

      <div className="overflow-x-auto shadow-md rounded-lg bg-white dark:bg-gray-800">
        <table className="min-w-full text-sm text-left table-auto">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Organization</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Members</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((org, idx) => (
              <tr
                key={org.id}
                onClick={() => handleRowClick(org.id)}
                className={`hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                  idx % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gray-50 dark:bg-gray-900"
                }`}
              >
                <td className="px-6 py-4 font-medium text-gray-800 dark:text-white">
                  {org.id}
                </td>
                <td className="px-6 py-4">{org.name}</td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                  {org.email}
                </td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                  {org.members}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      statusColors[org.status]
                    }`}
                  >
                    {org.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4 items-center text-sm">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
