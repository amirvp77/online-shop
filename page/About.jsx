import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <section className="group animate__animated animate__fadeIn cursor-pointer min-h-screen bg-white mt-20 px-6 py-16 md:px-16">
        <h2 className="mb-3  text-4xl font-bold text-[#183D2B] md:text-5xl">
          About Montio
        </h2>

        <div className="mb-12 h-1 w-full bg-[#183D2B]"></div>

        <div className=" flex flex-col items-center gap-10 md:flex-row">
          <div className="w-full overflow-hidden rounded-2xl md:w-1/2">
            <img
              src="/about2.jpg"
              alt="Montio Technology"
              className="h-[450px] w-full object-cover transition-transform duration-2000 ease-out group-hover:scale-145"
            />
          </div>

          <div className="flex flex-col gap-5 md:w-1/2">
            <h3 className="text-3xl font-bold text-[#183D2B]">
              More Than Just Technology.
            </h3>

            <p className="text-lg leading-8 text-gray-500">
              We believe technology should inspire, connect, and simplify the
              way we live.
            </p>

            <p className="leading-8 text-gray-500">
              From smartphones to laptop accessories, Montio brings together the
              essentials of your digital lifestyle. Our goal is to make
              discovering technology simple, inspiring, and exciting.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
