"use client";

import React from "react";

type Item = {
  question: string;
  answer: string;
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs: Item[] = [
    {
      question: "How to use this component?",
      answer:
        "To use this component, you need to import it in your project and use it in your JSX code.",
    },
    {
      question: "Are there any other components available?",
      answer:
        "Yes, there are many other components available in this library.",
    },
    {
      question: "Are components responsive?",
      answer:
        "Yes, all components are responsive and can be used on different screen sizes.",
    },
    {
      question: "Can I customize the components?",
      answer:
        "Yes, you can customize the components by passing props to them.",
    },
  ];

  return (
    <div className=" md:py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <p className="text-indigo-600 text-sm font-medium">FAQ&apos;s</p>

        <h1 className="text-3xl md:text-4xl font-semibold mt-2">Looking for answers?</h1>
        <p className="text-sm text-gray-600 mt-2">
          Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI Components.
        </p>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">{faq.question}</h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                    ? "max-h-[300px] opacity-100 pt-3"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
