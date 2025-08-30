"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      await submitContactForm(formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    } catch (err) {
      setStatus("error");
      setErrorMessage((err as Error).message);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-lg text-gray-700">Please use the form below to get in touch with us. We will get back to you as soon as possible.</p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-xl space-y-6">
        <div className="">
          <label htmlFor="name" className="block text-gray-800 text-base font-semibold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
        </div>

        <div className="">
          <label htmlFor="email" className="block text-gray-800 text-base font-semibold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          />
        </div>

        <div className="">
          <label htmlFor="subject" className="block text-gray-800 text-base font-semibold mb-2">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>

        <div className="">
          <label htmlFor="message" className="block text-gray-800 text-base font-semibold mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-4 text-center font-medium">Your message has been sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-4 text-center font-medium">Error sending message: {errorMessage}</p>
        )}
      </form>
    </div>
  );
}
