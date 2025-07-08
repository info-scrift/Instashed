import { useState } from "react";
import icon6 from "../../../Icon 6.svg";
import icon7 from "../../../Icon 7.svg";"
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const faqs = [
    {
      question: "How long does it take to build and install a shed?",
      answer:
        "Most residential sheds take 1-3 days to complete, depending on size and complexity. Commercial buildings may take 1-2 weeks. We provide a detailed timeline during the quote process.",
    },
    {
      question: "Do you handle permits and inspections?",
      answer:
        "Yes, we take care of all necessary permits and coordinate inspections with local authorities. This is included in our comprehensive service package.",
    },
    {
      question: "What warranty do you provide?",
      answer:
        "All our buildings come with a comprehensive warranty covering materials and workmanship. Metal components are backed by manufacturer warranties up to 40 years against rust and corrosion.",
    },
    {
      question: "Can you customize the design to my specific needs?",
      answer:
        "Absolutely! We specialize in custom solutions. Our team will work with you to design a building that meets your exact specifications, space requirements, and aesthetic preferences.",
    },
    {
      question: "What maintenance is required for metal buildings?",
      answer:
        "Metal buildings require minimal maintenance. Regular cleaning, checking for loose fasteners, and ensuring proper drainage around the foundation are typically all that's needed.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we partner with several financing companies to offer competitive rates and flexible payment plans. Contact us to discuss financing options that work for your budget.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            <span className="text-orange-500 relative inline-block">
              Frequently
              <span className="block w-[2px] h-8 bg-brand-orange mx-auto mt-1"></span>
            </span>{" "}
             Questions
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Find answers to the most common questions about our metal building
            services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-brand-orange flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
