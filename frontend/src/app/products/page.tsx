"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Import Image component
import { fetchProducts } from "@/lib/api";

interface Product {
  id: number;
  name: string;
  description?: string;
  category: string;
  image_url?: string;
  price?: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      {products.length === 0 ? (
        <p>No products available yet. Add some from the backend!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group transform hover:scale-103">
              {product.image_url && (
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">{product.name}</h2>
                {product.category && (
                  <p className="text-blue-600 text-sm font-medium mb-2">{product.category}</p>
                )}
                {product.description && (
                  <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                )}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  {product.price && (
                    <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                  )}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
