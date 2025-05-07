"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Login() {
  const router = useRouter();

  // Handle for login button
  const handleLogin = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Welcome!",
      text: "You have successfully logged in.",
      icon: "success",
      confirmButtonText: "Continue",
      allowOutsideClick: false,
    }).then(() => {
      router.push("/");
    });
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-gray-800 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Company Brand */}
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
          Selfeey
        </h1>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <h2 className="text-xl font-semibold text-center mb-4">
            Login to your account
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="mb-3 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-t" />
          <span className="mx-2 text-gray-500 text-sm">or continue with</span>
          <hr className="flex-grow border-t" />
        </div>

        {/* Social Logins */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition">
            {/* <Image src="/assets/icons/google.svg" alt="Google" className="w-5 h-5" /> */}
            Continue with Google
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition">
            {/* <Image src="/assets/icons/facebook.svg" alt="Facebook" className="w-5 h-5" /> */}
            Continue with Facebook
          </button>
        </div>

        {/* Register Redirect */}
        <p className="mt-6 text-sm text-center">
          New to Selfeey?{" "}
          <Link
            href="/register"
            className="text-blue-600 hover:underline"
            onClick={handleRegister}
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
