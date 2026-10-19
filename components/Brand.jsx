import { useEffect, useState } from "react";
import { BASE_URL } from "../api/domain";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Brand() {
  const [brand, setBrand] = useState([]);

  const getBrand = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/brands/`);
    const data = await res.json();

    setBrand(data.results ?? data);
  };

  useEffect(() => {
    getBrand();
  }, []);

  return (
    <div className="m-auto w-[92%] md:w-[88%] lg:w-[94%]">
      <h2 className="mb-5 mt-8 text-xl font-bold text-[#52734D] sm:mb-6 md:mb-8 md:mt-10 md:text-2xl lg:mb-10 lg:mt-10 lg:text-3xl">
        Popular Brands
      </h2>

      <div className="relative w-full px-1 sm:px-0">
        {brand.length > 0 && (
          <Swiper
            dir="rtl"
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            navigation={{
              nextEl: ".brand-prev",
              prevEl: ".brand-next",
            }}
            modules={[Autoplay, Navigation]}
            className="w-full"
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            }}
          >
            {brand.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex h-24 w-full items-center justify-center rounded-xl bg-white p-2 shadow-md sm:h-25 sm:p-2.5 md:h-30 md:p-3 lg:h-35 lg:p-4">
                  <img
                    src={item.logo}
                    alt={item.name}
                    loading="lazy"
                    className="h-14 w-full object-contain sm:h-16 md:h-20 lg:h-24"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <button
          type="button"
          aria-label="Previous brands"
          className="brand-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#183D2B] p-2 sm:left-1 sm:p-2.5 lg:p-3"
        >
          <FaChevronLeft className="text-xs text-white sm:text-sm md:text-base" />
        </button>

        <button
          type="button"
          aria-label="Next brands"
          className="brand-next absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#183D2B] p-2 sm:right-1 sm:p-2.5 lg:p-3"
        >
          <FaChevronRight className="text-xs text-white sm:text-sm md:text-base" />
        </button>
      </div>
    </div>
  );
}
