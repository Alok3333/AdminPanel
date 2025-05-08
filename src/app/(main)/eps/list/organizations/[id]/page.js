// app/eps/list/organizations/[id]/page.jsx

"use client";

import { useParams } from "next/navigation";

export default function OrganizationDetailPage() {
  const params = useParams();
  const { id } = params;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Organization Detail
      </h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Viewing details for organization ID: <strong>{id}</strong>
      </p>
    </div>
  );
}
