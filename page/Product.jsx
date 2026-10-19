import { useCallback, useEffect, useRef, useState } from "react";
import { BASE_URL } from "../api/domain";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState("");

  const loaderRef = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setError("");

        const res = await fetch(`${BASE_URL}/api/v1/products/`);

        if (!res.ok) {
          throw new Error("دریافت محصولات ناموفق بود.");
        }

        const data = await res.json();

        setProducts(data.results || []);
        setNextPage(data.next || null);
      } catch (err) {
        console.error(err);
        setError("دریافت محصولات با خطا مواجه شد.");
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  const loadMoreProducts = useCallback(async () => {
    if (!nextPage || isLoadingMore) return;

    setIsLoadingMore(true);
    setError("");

    try {
      const res = await fetch(nextPage);

      if (!res.ok) {
        throw new Error("دریافت محصولات بیشتر ناموفق بود.");
      }

      const data = await res.json();

      setProducts((prevProducts) => [...prevProducts, ...(data.results || [])]);

      setNextPage(data.next || null);
    } catch (err) {
      console.error(err);
      setError("بارگذاری محصولات بیشتر ناموفق بود.");
    } finally {
      setIsLoadingMore(false);
    }
  }, [nextPage, isLoadingMore]);

  useEffect(() => {
    const target = loaderRef.current;

    if (!target || isLoading || !nextPage || error) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.unobserve(target);
          loadMoreProducts();
        }
      },
      {
        rootMargin: "300px",
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [isLoading, nextPage, error, loadMoreProducts]);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f5f7] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="mb-10">
            <p className="mb-3 text-sm font-medium text-[#52734D]">
              MONTIO STORE
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#183D2B] sm:text-4xl lg:text-5xl">
              All Products
            </h1>

            <p className="mt-4 text-sm text-gray-500 sm:text-base">
              Find your favorite products and make your choice.
            </p>

            {!isLoading && (
              <p className="mt-3 text-sm text-gray-500">
                Products Loaded: {products.length}
              </p>
            )}
          </div>

          {isLoading ? (
            <div className="py-24 text-center text-gray-500">
              Loading products...
            </div>
          ) : error && products.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-red-600">{error}</p>

              <button
                onClick={() => window.location.reload()}
                className="mt-5 rounded-full bg-[#183D2B] px-6 py-3 text-sm text-white"
              >
                Try Again
              </button>
            </div>
          ) : products.length === 0 ? (
            <div className="py-24 text-center text-gray-500">
              No products available to display.
            </div>
          ) : (
            <>
              <div className="grid animate__animated animate__fadeIn grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((item) => (
                  <article
                    key={item.id}
                    className="flex min-w-0 flex-col overflow-hidden rounded-3xl bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
                  >
                    <Link to={`/product/${item.id}`} className="block">
                      <img
                        src={item.image || item.thumbnail}
                        alt={item.name}
                        loading="lazy"
                        className="h-auto w-full rounded-3xl object-cover transition duration-500 hover:scale-105"
                      />
                    </Link>

                    <div className="flex flex-1 flex-col pt-5 text-right">
                      <p className="text-xs text-left text-[#52734D]">
                        {item.category_name || "محصول"}
                      </p>

                      <Link
                        to={`/product/${item.id}`}
                        className="mt-2 text-left block min-h-14 text-lg font-semibold leading-7 text-[#183D2B] hover:text-[#52734D]"
                      >
                        {item.name}
                      </Link>

                      <p className="mt-2 text-left line-clamp-2 min-h-12 text-sm leading-6 text-gray-500">
                        {item.description ||
                          "توضیحاتی برای این محصول ثبت نشده است."}
                      </p>

                      <div className="mt-5">
                        <p className="text-xs text-left text-gray-400">Price</p>

                        <p className="mt-1 text-xl text-left font-bold text-[#183D2B]">
                          {Number(item.price).toLocaleString("en-US")} $
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-2 pt-5">
                        <button
                          type="button"
                          className="flex items-center gap-2 rounded-full bg-[#183D2B] px-4 py-2.5 text-sm text-white transition hover:bg-[#52734D]"
                        >
                          <ShoppingBag size={16} />
                          Buy
                        </button>

                        <Link
                          to={`/product/${item.id}`}
                          className="flex items-center gap-1 text-sm text-[#52734D] transition hover:text-[#183D2B]"
                        >
                          More
                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {nextPage && (
                <div
                  ref={loaderRef}
                  className="flex min-h-24 items-center justify-center py-8"
                >
                  {isLoadingMore && (
                    <p className="text-sm text-gray-500">
                      Loading more products...
                    </p>
                  )}
                </div>
              )}

              {error && products.length > 0 && (
                <div className="py-8 text-center">
                  <p className="text-sm text-red-600">{error}</p>

                  <button
                    type="button"
                    onClick={loadMoreProducts}
                    className="mt-3 rounded-full bg-[#183D2B] px-5 py-2.5 text-sm text-white"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {!nextPage && (
                <p className="py-12 text-center text-sm text-[#52734D]">
                  All products have been displayed.
                </p>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
