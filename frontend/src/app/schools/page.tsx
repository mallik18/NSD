"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Import Image component
import { fetchSchools } from "@/lib/api";

interface School {
  id: number;
  name: string;
  location?: string;
  image_url?: string;
}

export default function SchoolsPage() {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getSchools() {
      try {
        const data = await fetchSchools();
        setSchools(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getSchools();
  }, []);

  if (loading) return <p>Loading schools...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Partner Schools & Colleges</h1>
      {schools.length === 0 ? (
        <p>No schools available yet. Add some from the backend!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school) => (
            <div key={school.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group transform hover:scale-105">
              {school.image_url && (
                <div className="relative h-32 w-32 mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="https://placehold.co/128x128/e0e7ff/1e3a8a/png?text=School+Logo"
                    alt={school.name}
                    fill
                    className="object-contain w-full h-full p-2 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <h2 className="text-2xl font-bold text-blue-800 mb-2 mt-auto">{school.name}</h2>
              {school.location && (
                <p className="text-gray-600 text-lg mb-auto">{school.location}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
