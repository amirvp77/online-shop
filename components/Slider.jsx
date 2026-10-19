import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BASE_URL } from "../api/domain";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

export default function Slider() {
  const [loding, setLoding] = useState(true);
  const [slide, setSlide] = useState([]);

  const getSlide = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/v1/banners/`);

      if (!res.ok) {
        throw new Error("خطا در دریافت بنرها");
      }

      const data = await res.json();
      setSlide(data.results || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    getSlide();
  }, []);

  if (loding) {
    return (
      <div className="mt-6 px-4 py-10 text-center sm:mt-8 md:mt-10">
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <div className="mt-5 h-52 w-full px-3 sm:mt-7 sm:h-72 sm:px-5 md:mt-10 md:h-100 md:px-8 lg:h-150 lg:px-10">
      {slide.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={slide.length > 1}
          className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl"
        >
          {slide.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt={item.title || "Banner"}
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex h-full items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-500 sm:rounded-2xl sm:text-base">
          بنری برای نمایش وجود ندارد.
        </div>
      )}
    </div>
  );
}
