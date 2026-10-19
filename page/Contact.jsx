import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been prepared successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#52734D] focus:bg-white focus:ring-2 focus:ring-[#52734D]/15";

  return (
    <>
      <Header />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        rtl
        theme="colored"
      />

      <main className="min-h-screen bg-white px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <section className="mb-10 text-center sm:mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#52734D]">
              Get in Touch
            </p>

            <h1 className="mt-3 text-3xl font-bold text-[#183D2B] sm:text-4xl lg:text-5xl">
              Contact Montio
            </h1>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#52734D]" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
              Have a question about our products or need help with your order?
              We are here to help you make the most of your digital lifestyle.
            </p>
          </section>

          <section className="grid gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="flex flex-col gap-5 lg:col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-[#183D2B]">
                  Let’s Talk
                </h2>
                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Reach out to us using the information below. We look forward
                  to hearing from you.
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5 transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#52734D]/10 text-[#52734D]">
                  <Mail size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#183D2B]">Email</h3>
                  <p className="mt-1 break-all text-sm text-gray-500">
                    support@montio.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5 transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#52734D]/10 text-[#52734D]">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#183D2B]">Phone</h3>
                  <p className="mt-1 text-sm text-gray-500">+1 234 567 890</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5 transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#52734D]/10 text-[#52734D]">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#183D2B]">Location</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Online Store — Available Worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5 transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#52734D]/10 text-[#52734D]">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#183D2B]">
                    Customer Support
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We are happy to hear from you.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-[#183D2B]/5 sm:p-8 lg:col-span-3 lg:p-10">
              <h2 className="text-2xl font-bold text-[#183D2B]">
                Send Us a Message
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill out the form below and tell us how we can help.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-7 flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-[#183D2B]">
                    Your Name
                    <input
                      className={inputClass}
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm font-medium text-[#183D2B]">
                    Email Address
                    <input
                      className={inputClass}
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#183D2B]">
                  Subject
                  <input
                    className={inputClass}
                    type="text"
                    name="subject"
                    placeholder="What is your message about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#183D2B]">
                  Message
                  <textarea
                    className={`${inputClass} min-h-36 resize-y`}
                    name="message"
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#183D2B] px-5 font-semibold text-white transition-colors hover:bg-[#52734D] sm:w-fit sm:min-w-44"
                >
                  <Send size={18} />
                  Send Message
                </button>

                <p className="text-xs leading-5 text-gray-400">
                  This demo form does not send messages to a server yet.
                </p>
              </form>
            </div>
          </section>

          <div className="mt-12 rounded-2xl bg-[#183D2B] px-5 py-8 text-center sm:mt-16 sm:px-10 sm:py-10">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Your Digital Lifestyle, Made Simpler.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Explore our collection and discover technology that fits your
              everyday life.
            </p>
            <Link
              to="/product"
              className="mt-6 inline-flex rounded-full bg-[#F7DBA7] px-7 py-3 text-sm font-semibold text-[#183D2B] transition-colors hover:bg-white"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
