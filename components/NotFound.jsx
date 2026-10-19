import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#F7DBA7] via-[#52734D] to-[#183D2B] px-4 py-24 text-center sm:px-6 sm:py-20">
        <div className="animate-bounce text-7xl font-extrabold tracking-wider text-[#6f0404] drop-shadow-lg sm:text-8xl md:text-[140px] lg:text-[180px]">
          404
        </div>

        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Not Found !
        </h1>

        <p className="mt-4 max-w-md text-sm leading-7 text-white/90 sm:text-base sm:leading-8 md:text-lg">
          Unfortunately, the page you're looking for doesn't exist or may have
          been moved to another address.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#183D2B] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#244F38] hover:shadow-2xl sm:px-8 sm:text-base"
        >
          Back To Home
        </Link>
      </main>

      <Footer />
    </>
  );
}
