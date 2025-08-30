"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-lg font-semibold text-left text-blue-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-700 leading-relaxed animate-fade-in-down">
          {answer}
        </p>
      )}
    </div>
  );
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What types of uniforms do you offer?",
      answer: "We offer a wide range of uniforms including school uniforms, corporate uniforms, sports uniforms, and custom-designed uniforms for various institutions.",
    },
    {
      question: "Do you provide custom uniform design services?",
      answer: "Yes, we specialize in custom uniform programs. Our team works closely with clients to create bespoke designs that reflect their brand identity and specific requirements.",
    },
    {
      question: "What is your minimum order quantity for custom uniforms?",
      answer: "Our minimum order quantity for custom uniforms varies depending on the complexity of the design and the type of garment. Please contact us with your specific needs for a detailed quote.",
    },
    {
      question: "How long does it take to process an order?",
      answer: "Order processing times depend on the order size, customization requirements, and current production schedule. We will provide an estimated delivery timeline upon order confirmation.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods, including bank transfers, credit/debit cards, and other digital payment options. Details will be provided during the invoicing process.",
    },
  ];

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-12">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
