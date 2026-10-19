import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../api/domain";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Product2() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const productRef = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/v1/products/`);

        if (!res.ok) {
          throw new Error("خطا در دریافت محصولات");
        }

        const data = await res.json();
        setProducts(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (isLoading || isVisible) return;

    const element = productRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isLoading, isVisible]);

  return (
    <section className="mt-5 bg-[#f5f5f7] px-4 py-12 sm:px-5 sm:py-16 md:px-10 md:py-24">
      <div className="w-full">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#183D2B] sm:text-4xl md:text-5xl">
              Explore the lineup.
            </h2>
          </div>

          <Link to="/product" className="self-start sm:self-auto">
            <h4 className="flex items-center gap-2 text-sm text-[#52734D] transition hover:gap-3">
              Compare all models
              <ArrowRight size={17} />
            </h4>
          </Link>
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-gray-500">
            در حال دریافت محصولات...
          </div>
        ) : products.length === 0 ? (
          <div className="py-20 text-center text-gray-500">
            محصولی برای نمایش وجود ندارد.
          </div>
        ) : (
          <div
            id="products"
            ref={productRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
          >
            {products.slice(0, 7).map((item, index) => (
              <article
                key={item.id}
                style={{
                  animationDelay: isVisible ? `${index * 120}ms` : "0ms",
                }}
                className={`box-border min-w-0 flex-[0_0_85%] snap-start overflow-hidden rounded-3xl bg-white p-3 transition duration-300 hover:-translate-y-1 sm:flex-[0_0_65%] sm:p-4 lg:flex-[0_0_calc((100%-50px)/3.5)] ${
                  isVisible
                    ? "animate__animated animate__fadeInUp"
                    : "opacity-0"
                }`}
              >
                <img
                  src={item.image || item.thumbnail}
                  alt={item.name}
                  loading="lazy"
                  className="h-auto w-full rounded-3xl object-cover transition duration-500 hover:scale-105"
                />

                <div className="px-1 pt-4 text-right sm:pt-6">
                  <p className="text-left text-xs text-gray-500 sm:text-sm">
                    {item.category_name || "گوشی موبایل"}
                  </p>

                  <h3 className="mt-2 text-left text-xl font-semibold tracking-tight text-[#183D2B] sm:text-2xl">
                    {item.name}
                  </h3>

                  <p className="line-clamp-2 h-12 overflow-hidden text-left text-xs leading-6 text-gray-600 sm:text-sm">
                    {item.description}
                  </p>

                  <p className="mt-3 text-left text-base font-medium text-gray-800 sm:text-lg">
                    {Number(item.price).toLocaleString("en-US")} $
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-2 sm:mt-6 sm:gap-3">
                    <button
                      type="button"
                      className="flex items-center gap-1.5 rounded-full bg-[#183D2B] px-3 py-2.5 text-xs text-white transition hover:bg-[#52734D] sm:gap-2 sm:px-5 sm:text-sm"
                    >
                      <ShoppingBag size={16} />
                      Buy
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        alert(
                          `${item.name}\nقیمت: ${Number(item.price).toLocaleString("en-US")} $`,
                        )
                      }
                      className="flex items-center gap-1 text-xs text-[#52734D] transition hover:text-[#183D2B] sm:text-sm"
                    >
                      Learn more
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
