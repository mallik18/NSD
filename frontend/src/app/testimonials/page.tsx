"use client";

import { useState, useEffect } from "react";
import { fetchTestimonials } from "@/lib/api";

interface Testimonial {
  id: number;
  author: string;
  text: string;
  school_name?: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getTestimonials() {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getTestimonials();
  }, []);

  if (loading) return <p>Loading testimonials...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Testimonials</h1>
      {testimonials.length === 0 ? (
        <p>No testimonials available yet. Add some from the backend!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 17h3l2-4V7H6v6zm10 0h3l2-4V7h-6v6z"/>
                </svg>
                <p className="text-gray-700 italic text-xl mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
              <div>
                <p className="font-bold text-blue-800 text-lg">- {testimonial.author}</p>
                {testimonial.school_name && (
                  <p className="text-blue-600 text-md mt-1">{testimonial.school_name}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
