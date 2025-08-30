"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const router = useRouter(); // Initialize useRouter

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${searchTerm}`); // Redirect to search results page
      setIsMenuOpen(false); // Close mobile menu after search
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">
          <Link href="/" className="hover:text-blue-100 transition-colors duration-200">
            NSD Uniforms
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg items-center">
          <Link href="/products" className="hover:text-blue-200 transition-colors duration-200">Products</Link>
          <Link href="/testimonials" className="hover:text-blue-200 transition-colors duration-200">Testimonials</Link>
          <Link href="/schools" className="hover:text-blue-200 transition-colors duration-200">Schools</Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors duration-200">About Us</Link>
          <Link href="/faq" className="hover:text-blue-200 transition-colors duration-200">FAQ</Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors duration-200">Contact Us</Link>
          <form onSubmit={handleSearch} className="relative ml-6">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full bg-blue-600 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 w-48 transition-all duration-300 ease-in-out focus:w-64"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200 focus:outline-none">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </form>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            className="text-white focus:outline-none mr-4"
            onClick={() => { /* Handle mobile search visibility */ }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 px-4 pt-2 pb-4 space-y-2">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(e);
                }
              }}
              className="pl-10 pr-4 py-2 rounded-full bg-blue-700 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <Link href="/products" className="block hover:bg-blue-700 p-2 rounded transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link href="/testimonials" className="block hover:bg-blue-700 p-2 rounded transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
          <Link href="/schools" className="block hover:bg-blue-700 p-2 rounded transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Schools</Link>
          <Link href="/about" className="block hover:bg-blue-700 p-2 rounded transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/faq" className="block hover:bg-blue-700 p-2 rounded transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
          <Link href="/contact" className="block hover:bg-blue-700 p-2 rounded transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}

