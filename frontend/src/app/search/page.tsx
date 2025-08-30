"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  description?: string;
  category: string;
  image_url?: string;
  price?: number;
}

interface School {
  id: number;
  name: string;
  location?: string;
  image_url?: string;
}

// Placeholder API functions (replace with actual calls to your FastAPI backend)
async function searchProducts(query: string): Promise<Product[]> {
  // In a real application, you would call your FastAPI backend here
  // For now, returning dummy data
  console.log(`Searching products for: ${query}`);
  return [
    { id: 1, name: "Blue School Shirt", description: "Comfortable cotton shirt", category: "Shirt", image_url: "https://images.unsplash.com/photo-1592877395638-34f71a4f0b2f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 15.00 },
    { id: 2, name: "Grey School Trousers", description: "Durable polyester trousers", category: "Pant", image_url: "https://images.unsplash.com/photo-1542838381-8178a3c8e4e9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 25.00 },
  ].filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.description?.toLowerCase().includes(query.toLowerCase()));
}

async function searchSchools(query: string): Promise<School[]> {
  // In a real application, you would call your FastAPI backend here
  // For now, returning dummy data
  console.log(`Searching schools for: ${query}`);
  return [
    { id: 1, name: "Springfield High", location: "Springfield", image_url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Riverside University", location: "Riverside", image_url: "https://images.unsplash.com/photo-1571260899304-425eee4c7ce9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ].filter(s => s.name.toLowerCase().includes(query.toLowerCase()) || s.location?.toLowerCase().includes(query.toLowerCase()));
}

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function performSearch() {
      if (!searchQuery) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const [productResults, schoolResults] = await Promise.all([
          searchProducts(searchQuery),
          searchSchools(searchQuery),
        ]);
        setProducts(productResults);
        setSchools(schoolResults);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    performSearch();
  }, [searchQuery]);

  if (loading) return <p className="text-center py-10">Searching...</p>;
  if (error) return <p className="text-red-500 text-center py-10">Error: {error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
        Search Results for "{searchQuery}"
      </h1>

      {searchQuery === "" ? (
        <p className="text-center text-gray-600 text-lg">Please enter a search term.</p>
      ) : (
        <div className="space-y-12">
          {/* Product Results */}
          <section>
            <h2 className="text-3xl font-semibold text-blue-700 mb-6">Products</h2>
            {products.length === 0 ? (
              <p className="text-gray-600">No products found matching your query.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
                    {product.image_url && (
                      <img src={product.image_url} alt={product.name} className="w-32 h-32 object-cover rounded-md mb-4" />
                    )}
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">{product.category}</p>
                    {product.description && (
                      <p className="text-gray-700 text-sm mb-2">{product.description}</p>
                    )}
                    {product.price && (
                      <p className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* School Results */}
          <section>
            <h2 className="text-3xl font-semibold text-blue-700 mb-6">Schools</h2>
            {schools.length === 0 ? (
              <p className="text-gray-600">No schools found matching your query.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {schools.map((school) => (
                  <div key={school.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
                    {school.image_url && (
                      <img src={school.image_url} alt={school.name} className="w-32 h-32 object-contain rounded-full bg-gray-100 mb-4" />
                    )}
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{school.name}</h3>
                    {school.location && (
                      <p className="text-gray-700 text-sm">{school.location}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
