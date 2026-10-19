import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BASE_URL } from "../api/domain";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(`${BASE_URL}/api/v1/products/${id}/`);

        if (!res.ok) {
          throw new Error("Failed to fetch product.");
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load product details.");
      } finally {
        setIsLoading(false);
      }
    };

    getProduct();
  }, [id]);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/product"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#52734D] transition-colors hover:text-[#183D2B] sm:mb-8 sm:text-base"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>

          {isLoading ? (
            <div className="py-24 text-center text-gray-500">
              Loading product details...
            </div>
          ) : error ? (
            <div className="py-20 text-center sm:py-24">
              <p className="text-sm text-red-600 sm:text-base">{error}</p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-5 rounded-full bg-[#183D2B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#52734D] sm:text-base"
              >
                Try Again
              </button>
            </div>
          ) : product ? (
            <div className="grid overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg shadow-[#183D2B]/5 md:grid-cols-2 md:rounded-3xl">
              <div className="flex min-h-64 items-center justify-center bg-gray-50/50 p-6 sm:min-h-80 sm:p-10 md:min-h-[480px] lg:p-14">
                <img
                  src={product.image || product.thumbnail}
                  alt={product.name || "Product"}
                  className="max-h-72 w-full object-contain sm:max-h-96 md:max-h-[500px]"
                />
              </div>

              <div className="flex min-w-0 flex-col justify-center p-5 sm:p-8 md:p-10 lg:p-14">
                <p className="text-sm font-semibold text-[#52734D]">
                  {product.category_name || "Product"}
                </p>

                <h1 className="mt-3 break-words text-2xl font-bold leading-tight text-[#183D2B] sm:mt-4 sm:text-3xl lg:text-4xl">
                  {product.name}
                </h1>

                <p className="mt-5 whitespace-pre-line break-words text-sm leading-7 text-gray-500 sm:mt-6 sm:text-base sm:leading-8">
                  {product.description ||
                    "No description available for this product."}
                </p>

                <div className="mt-6 border-t border-gray-100 pt-5 sm:mt-8 sm:pt-6">
                  <p className="text-sm text-gray-400">Price</p>

                  <p className="mt-2 break-words text-2xl font-bold text-[#183D2B] sm:text-3xl">
                    {Number(product.price).toLocaleString("en-US")} $
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-6 w-full rounded-full bg-[#183D2B] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#52734D] sm:mt-8 sm:py-4 sm:text-base"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </main>

      <Footer />
    </>
  );
}
