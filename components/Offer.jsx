import { useEffect, useState } from "react";
import { BASE_URL } from "../api/domain";

export default function Offer() {
  const [offer, setOffer] = useState([]);

  const getOffer = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/v1/promo-cards/`);

      if (!res.ok) {
        throw new Error("خطا در دریافت پیشنهادها");
      }

      const data = await res.json();
      setOffer(data.results || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOffer();
  }, []);

  return (
    <div className="mt-12 grid w-full grid-cols-2 gap-3 px-3 sm:mt-16 sm:gap-4 sm:px-5 md:mt-20 md:grid-cols-2 md:gap-5 md:px-10 lg:grid-cols-4">
      {offer.map((item) => (
        <div
          key={item.id}
          className="h-32 w-full overflow-hidden rounded-xl sm:h-44 sm:rounded-2xl md:h-64"
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
