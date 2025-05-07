export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="mb-4 w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full px-3 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
