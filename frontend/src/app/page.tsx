"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate h1
    if (h1Ref.current) {
      h1Ref.current.classList.add('animate-fade-in-up');
    }

    // Animate p
    if (pRef.current) {
      pRef.current.classList.add('animate-fade-in-up', 'delay-100');
    }

    // Animate button group
    if (buttonGroupRef.current) {
      buttonGroupRef.current.classList.add('animate-fade-in-up', 'delay-200');
    }
  }, []);

  return (
    <>
      <div
        className="relative min-h-[calc(100vh-16rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <Image
          src="https://placehold.co/1200x800/e0e7ff/1e3a8a/png?text=NSD+Uniforms+Hero"
          alt="Background Image"
          fill
          className="z-0 object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-70 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto text-center text-white">
          <h1 ref={h1Ref} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg opacity-0 transform translate-y-4">
            Quality School Uniforms <br className="hidden sm:inline"/> for Every Student
          </h1>
          <p ref={pRef} className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md opacity-0 transform translate-y-4">
            Providing durable, comfortable, and stylish school uniforms to institutions and students.
          </p>
          <div ref={buttonGroupRef} className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 transform translate-y-4">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-100 md:py-4 md:px-10 text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
            >
              View Products
          </a>
          <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-blue-800 md:py-4 md:px-10 text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* School Uniforms Card */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col items-center">
              <Image src="/school-icon.svg" alt="School Uniforms Icon" width={80} height={80} className="mb-6" />
              <h3 className="text-3xl font-bold text-blue-700 mb-4">School Uniform Solutions</h3>
              <p className="text-lg text-gray-700 mb-6">Comprehensive uniform programs for schools of all sizes, ensuring quality, comfort, and compliance.</p>
              <a
                href="/products?category=school"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Explore School Uniforms
              </a>
            </div>

            {/* Custom Uniform Programs Card */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col items-center">
              <Image src="/custom-icon.svg" alt="Custom Uniforms Icon" width={80} height={80} className="mb-6" />
              <h3 className="text-3xl font-bold text-blue-700 mb-4">Custom Uniform Programs</h3>
              <p className="text-lg text-gray-700 mb-6">Tailored uniform solutions for colleges, sports teams, and corporate clients with custom branding and designs.</p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-300 ease-in-out"
              >
                Get a Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/Subscription Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Be the First to Know!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive updates, new product launches, and special offers.
          </p>
          <div className="max-w-lg mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow p-4 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-white text-blue-800 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Uniform Image Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-12">Our Uniform Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image src="https://placehold.co/500x400/e0e7ff/1e3a8a/png?text=Primary+School" alt="Primary School Uniform" fill className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700">Primary School</h3>
                <p className="text-gray-600">Comfortable & Durable</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image src="https://placehold.co/500x400/e0e7ff/1e3a8a/png?text=High+School" alt="High School Uniform" fill className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700">High School</h3>
                <p className="text-gray-600">Smart & Stylish</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image src="https://placehold.co/500x400/e0e7ff/1e3a8a/png?text=Sports+Wear" alt="Sports Uniform" fill className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700">Sports Wear</h3>
                <p className="text-gray-600">Flexible & Breathable</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image src="https://placehold.co/500x400/e0e7ff/1e3a8a/png?text=Corporate" alt="Corporate Uniform" fill className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700">Corporate</h3>
                <p className="text-gray-600">Professional & Elegant</p>
              </div>
            </div>
          </div>
    </div>
      </section>
    </>
  );
}
