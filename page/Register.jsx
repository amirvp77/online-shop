import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../api/domain";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBackwardStep } from "react-icons/fa6";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone, setPhone] = useState("");

  const SignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          confirm_password: password2,
          phone: phone,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("ثبت‌نام با موفقیت انجام شد! 🎉");
      } else {
        toast.error(data.message || "ثبت‌نام ناموفق بود!");
      }
    } catch (error) {
      console.log(error);
      toast.error("خطا در برقراری ارتباط با سرور");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-gray-800 outline-none transition focus:border-[#52734D] focus:bg-white focus:ring-2 focus:ring-[#52734D]/15";

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

      <main className="mx-auto mt-4 flex w-full max-w-5xl flex-col items-center gap-8 sm:mt-8 md:flex-row md:gap-12 lg:gap-16">
        <div className="w-full text-center md:w-1/2">
          <h1 className="p-2 text-3xl font-bold text-[#183D2B] sm:text-4xl">
            Sign Up
          </h1>

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#52734D]" />

          <h3 className="mt-5 text-lg font-semibold leading-8 text-[#183D2B] sm:text-xl sm:leading-9">
            Welcome to Our Website
            <br />
            <span className="font-normal text-gray-500">
              Please enter your information
            </span>
          </h3>
        </div>

        <form
          onSubmit={SignUp}
          className="flex w-full flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-[#183D2B]/10 sm:p-8 md:w-1/2"
        >
          <label className="flex flex-col gap-2 text-sm font-medium text-[#183D2B] sm:text-base">
            Email
            <input
              className={inputClass}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-[#183D2B] sm:text-base">
            Phone
            <input
              className={inputClass}
              type="tel"
              placeholder="09xxxxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-[#183D2B] sm:text-base">
            Password
            <input
              className={inputClass}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-[#183D2B] sm:text-base">
            Confirm Password
            <input
              className={inputClass}
              type="password"
              placeholder="Confirm your password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </label>

          <button
            type="submit"
            className="mt-2 h-12 w-full rounded-xl bg-[#183D2B] font-semibold text-white transition-colors duration-300 hover:bg-[#52734D]"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#52734D] transition-colors hover:text-[#183D2B]"
            >
              Sign In
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
