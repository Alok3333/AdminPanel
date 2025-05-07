"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  // Handle login button
  const handleLogin = (e) => {
    e.preventDefault();

    alert("Welcome");
    router.push("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow w-full max-w-sm" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full px-3 py-2 border"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full px-3 py-2 border"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
}
