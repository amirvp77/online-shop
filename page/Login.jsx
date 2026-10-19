import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../api/domain";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getForgot } from "./Forgot";
import { MdEmail } from "react-icons/md";
import { FaBackwardStep } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("ورود با موفقیت انجام شد! 🎉");
      } else {
        toast.error(data.message || "ورود ناموفق بود!");
      }
    } catch (error) {
      console.log(error);
      toast.error("خطا در برقراری ارتباط با سرور");
    }
  };

  const handleForgot = async (e) => {
    setIsLoading(true);

    try {
      const success = await getForgot(e, forgotEmail);

      if (success) {
        setShowForgotModal(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 pb-12 sm:px-6">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        rtl
        theme="colored"
      />

      <Link
        to="/"
        className="inline-flex items-center gap-2 py-5 text-sm font-medium text-[#183D2B] transition-colors hover:text-[#52734D] sm:text-base"
      >
        <FaBackwardStep />
        Back to home
      </Link>

      <main className="mx-auto flex w-full max-w-md flex-col items-center pt-6 sm:pt-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#183D2B] sm:text-4xl">
            Login
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#52734D]" />

          <h3 className="mt-6 text-lg font-semibold leading-8 text-[#183D2B] sm:text-xl">
            Welcome to Our Website
            <br />
            <span className="font-normal text-gray-500">
              Please sign in to your account
            </span>
          </h3>
        </div>

        <form
          onSubmit={getLogin}
          className="flex w-full flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-[#183D2B]/10 sm:p-8"
        >
          <label className="flex flex-col gap-2 text-sm font-medium text-[#183D2B] sm:text-base">
            Email
            <input
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-gray-800 outline-none transition focus:border-[#52734D] focus:bg-white focus:ring-2 focus:ring-[#52734D]/15"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-[#183D2B] sm:text-base">
            Password
            <input
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-gray-800 outline-none transition focus:border-[#52734D] focus:bg-white focus:ring-2 focus:ring-[#52734D]/15"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button
            type="submit"
            className="mt-2 h-12 w-full rounded-xl bg-[#183D2B] font-semibold text-white transition-colors duration-300 hover:bg-[#52734D]"
          >
            Login
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <button
              type="button"
              onClick={() => {
                setForgotEmail(email);
                setShowForgotModal(true);
              }}
              className="text-gray-500 transition-colors hover:text-[#183D2B]"
            >
              Forgot Password?
            </button>

            <span className="text-gray-300">|</span>

            <Link
              to="/register"
              className="font-medium text-[#52734D] transition-colors hover:text-[#183D2B]"
            >
              Create Account
            </Link>
          </div>
        </form>

        {showForgotModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={() => setShowForgotModal(false)}
          >
            <div
              className="relative w-full max-w-md rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setShowForgotModal(false)}
                className="absolute right-4 top-4 text-2xl text-gray-400 transition-colors hover:text-[#183D2B]"
              >
                <IoClose />
              </button>

              <div className="mb-6 text-center">
                <div className="mb-3 flex justify-center text-4xl text-[#52734D]">
                  <MdEmail />
                </div>

                <h2 className="text-xl font-bold text-[#183D2B] sm:text-2xl">
                  Reset Password
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Enter your email address to reset your password.
                </p>
              </div>

              <form onSubmit={handleForgot} className="flex flex-col gap-4">
                <label className="text-sm font-medium text-[#183D2B]">
                  Email Address
                  <input
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-gray-800 outline-none transition focus:border-[#52734D] focus:bg-white focus:ring-2 focus:ring-[#52734D]/15"
                    type="email"
                    placeholder="Enter your email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    required
                  />
                </label>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 rounded-xl bg-[#183D2B] font-semibold text-white transition-colors hover:bg-[#52734D] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </button>

                <button
                  type="button"
                  onClick={() => setShowForgotModal(false)}
                  className="text-sm text-gray-500 transition-colors hover:text-[#183D2B]"
                >
                  Back to Login
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
