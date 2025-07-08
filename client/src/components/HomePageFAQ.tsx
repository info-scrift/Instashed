import { useState } from "react";
import icon7 from "../../../Icon 6.svg"; // Down arrow (collapsed)
import icon6 from "../../../reqicon2.svg"; // Up arrow (expanded)

export default function HomePageFAQ() {
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setExpandedFAQs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const faqs = [
    {
      question: "1. How much does a custom metal shed or garage cost?",
      answer:
        "The price depends on size, features, and location. Our metal building quotes are tailored to your space — most customers find steel sheds more affordable than traditional wood structures over time. Request a Free Quote!",
    },
    {
      question: "2. What areas does InstaShed serve?",
      answer:
        "We serve customers across multiple states with our network of certified installers. Contact us to confirm service availability in your specific area and get connected with local installation teams.",
    },
    {
      question: "3. How long does it take to build and install a metal building?",
      answer:
        "Most residential metal sheds and garages take 1-3 days to complete installation. Larger commercial buildings may take 1-2 weeks depending on size and complexity. We provide detailed timelines during the quote process.",
    },
    {
      question: "4. Do I need a permit for my shed or garage?",
      answer:
        "Permit requirements vary by location, building size, and local regulations. We help guide you through the permit process and can assist with applications where needed. Our team knows local requirements in most service areas.",
    },
    {
      question: "5. What kind of foundations do you install on?",
      answer:
        "We work with various foundation types including concrete slabs, gravel pads, level ground preparations, and pier foundations. Our team will recommend the best foundation option based on your soil conditions, building size, and local requirements.",
    },
    {
      question: "6. Can I customize the size and features of my shed or garage?",
      answer:
        "Absolutely! We specialize in custom metal buildings tailored to your exact needs. Choose from various sizes, door configurations, window placements, insulation options, and color schemes to create your perfect building.",
    },
    {
      question: "7. What is the lifespan of an InstaShed metal building?",
      answer:
        "Our metal buildings are built to last decades with minimal maintenance. Steel construction resists rot, insects, and weather damage. Most components come with manufacturer warranties up to 40 years against rust and corrosion.",
    },
    {
      question: "8. Do you offer financing or rent-to-own options?",
      answer:
        "Yes, we offer flexible financing solutions including rent-to-own programs to make your metal building more affordable. Contact us to discuss available financing options and find a payment plan that works for your budget.",
    },
    {
      question: "9. How does delivery and installation work?",
      answer:
        "We handle the entire process from manufacturing to installation. Your building is delivered directly to your site by our professional team, who then complete the installation according to specifications. We coordinate timing to minimize disruption to your schedule.",
    },
    {
      question: "10. What if I need support after installation?",
      answer:
        "We provide ongoing customer support after installation. Our warranty covers both materials and workmanship, and our customer service team is available to address any questions or concerns you may have about your metal building.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Vertical Line */}
        <div className="absolute top-[80px] bottom-0 left-8 w-1 bg-gradient-to-b from-orange-500 to-transparent rounded-full" />

        {/* Heading Section */}
        <div className="mb-12 text-left">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
            <span className="text-orange-500 block">Frequently</span>
            <span className="block pl-8 mt-2">Asked Questions</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-xl pl-8">
            Find answers to the most common questions about our metal building
            services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 pl-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <img
                  src={expandedFAQs.includes(index) ? icon7 : icon6}
                  alt={expandedFAQs.includes(index) ? "Collapse FAQ answer" : "Expand FAQ answer"}
                  className="w-5 h-5 flex-shrink-0"
                />
              </button>
              {expandedFAQs.includes(index) && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
