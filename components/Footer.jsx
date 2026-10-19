export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="mt-6 md:mt-16 lg:mt-20 w-full bg-base-200 text-base-content"
    >
      <div className="flex flex-col md:flex-row lg:flex-row h-auto md:h-auto lg:h-25 w-full items-center justify-between gap-4 md:gap-5 lg:gap-10 bg-gray-200 p-5 md:p-6 lg:p-10 text-gray-600 text-center md:text-right">
        <span>021-33902646</span>

        <span className="text-left text-sm md:text-sm lg:text-base">
          Saturday to Wednesday: 10 AM – 6 PM
          <br />
          Thursday: 10 AM – 4 PM
        </span>

        <span className="text-sm md:text-sm text-left lg:text-base">
          Address: No. 1162/1, 5th Floor, Corner of Parvaresh St., 17 Shahrivar
          Street, Tehran, Iran
        </span>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer rounded-2xl w-20 md:w-20 lg:w-15 h-10 bg-[#183D2B] text-white shrink-0"
        >
          top
        </button>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row h-auto lg:h-100 w-full justify-between gap-20 bg-white p-6 md:p-8 lg:p-10 items-center lg:items-center">
        <div className="flex w-full md:w-full lg:w-2/4 flex-col gap-5 text-center md:text-right">
          <h2 className="text-lg md:text-xl text-left font-bold">
            Montio Online Store
          </h2>

          <p className="text-sm text-left leading-7 md:leading-8 text-gray-600">
            Montio Store began its journey in 2010, initially selling computer
            and mobile accessories through its physical store in Tehran. In
            2019, it expanded into online sales through Instagram. By offering
            genuine products and providing accurate, professional advice, Montio
            quickly earned the trust of many customers. In 2020, Montio launched
            its website to enhance the shopping experience and help customers
            products, including mobile adapters, charging cables, power banks,
            and chargers, networking equipment, storage devices, digital
            receivers, and thousands of exciting gadgets.
          </p>
        </div>

        <div className="flex  w-full md:w-full lg:w-1/4 flex-col gap-5 text-center md:text-right">
          <h3 className="text-lg text-left font-bold">Quick Links</h3>

          <nav dir="ltr">
            <ul className="flex flex-col gap-3 text-sm text-gray-600 items-start">
              <li className="cursor-pointer hover:text-[#183D2B]">
                Customer Club
              </li>
              <li className="cursor-pointer hover:text-[#183D2B]">
                Frequently Asked Questions
              </li>
              <li className="cursor-pointer hover:text-[#183D2B]">Blog</li>
              <li className="cursor-pointer hover:text-[#183D2B]">
                Terms & Conditions
              </li>
              <li className="cursor-pointer hover:text-[#183D2B]">
                Contact Us
              </li>
              <li className="cursor-pointer hover:text-[#183D2B]">About Us</li>
            </ul>
          </nav>
        </div>

        <div className="w-full md:w-full lg:w-1/4 flex justify-center lg:ml-30  lg:justify-end">
          <img
            src="download.png"
            alt="لوگو"
            className="w-22 md:w-66 lg:w-95 "
          />
        </div>
      </div>

      <div className="min-h-12.5 w-full bg-[#183D2B]  p-3 text-white text-center text-xs md:text-sm">
        <p>
          All rights reserved. This website is the property of Montio Online
          Store.
        </p>
      </div>
    </footer>
  );
}
