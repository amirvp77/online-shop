import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Truck, Headset, BadgeCheck } from "lucide-react";

const reasons = [
  {
    id: 1,
    icon: ShieldCheck,
    name: "Secure Shopping",
    des: "Shop with confidence and trust the quality of our products.",
  },
  {
    id: 2,
    icon: Truck,
    name: "Fast Delivery",
    des: "Receive your orders as quickly as possible.",
  },
  {
    id: 3,
    icon: Headset,
    name: "Customer Support",
    des: "We're here to help you with any questions or issues.",
  },
  {
    id: 4,
    icon: BadgeCheck,
    name: "Quality Guarantee",
    des: "High-quality products for a satisfying shopping experience.",
  },
];

export default function Why() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mx-auto mt-12 w-[92%] md:mt-16 md:w-[85%] lg:mt-20 lg:w-[80%] ${
        isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
      }`}
    >
      <h1 className="mb-8 text-center text-xl font-bold sm:mb-10 md:mb-12 md:text-2xl lg:mb-16 lg:text-3xl">
        Why choose <span className="text-[#52734D]">Montio</span> for your
        purchases?
      </h1>

      <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {reasons.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              style={{
                animationDelay: isVisible ? `${index * 120}ms` : "0ms",
              }}
              className={`rounded-2xl bg-white px-4 py-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg sm:px-5 sm:py-8 ${
                isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
              }`}
            >
              <Icon
                size={48}
                strokeWidth={1.7}
                className="mx-auto mb-5 text-[#52734D]"
              />

              <h2 className="mb-3 text-base font-bold text-gray-700 sm:mb-4 sm:text-lg">
                {item.name}
              </h2>

              <p className="text-sm leading-7 text-gray-600 md:text-base">
                {item.des}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
