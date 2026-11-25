import { useState } from "react";

// Tailwind classes we reuse for every input box
const inputStyle =
  "w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-[#0F766E] focus:ring-2 focus:ring-teal-200";

export default function Login({ goToRegister }) {
  // These variables store what the user types
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Runs when the user clicks "Log in"
  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    console.log("Login data:", { email, password });
  };

  return (
    // Full screen teal background, card in the center
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0F3D3E] to-[#0F766E] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        {/* Logo */}
        <div className="mb-6 flex items-center gap-2 text-lg font-semibold text-[#0F3D3E]">
          <span className="h-3 w-3 animate-pulse rounded-full bg-[#14B8A6]"></span>
          PulseWork AI
        </div>

        <h2 className="text-3xl font-bold text-slate-900">Welcome back</h2>
        <p className="mt-2 text-slate-500">Log in to continue.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputStyle}
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={inputStyle}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-[#0F766E]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#0F766E] py-3 font-semibold text-white transition hover:bg-[#0F3D3E]"
          >
            Log in
          </button>
        </form>

        {/* Link to the register page */}
        <p className="mt-6 text-center text-slate-600">
          New here?{" "}
          <button
            onClick={goToRegister}
            className="font-semibold text-[#0F766E] hover:underline"
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}