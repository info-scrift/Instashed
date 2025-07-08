import { useState } from "react";
import testimonialImage from "../../../Image 17.png";
import icon13 from "../../../Icon 13.svg"; // Right icon
import icon12 from "../../../Icon 12.svg"; // Left icon

export default function ClientTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "The team at INSTA-SHED was incredible to work with. From the initial consultation to the final installation, everything was handled professionally and efficiently. Our new metal garage has exceeded our expectations in both quality and functionality.",
      name: "Sarah Mitchell",
      title: "Homeowner, Austin TX",
    },
    {
      quote:
        "Outstanding service from start to finish! The quality of our agricultural barn is exceptional, and it was completed ahead of schedule. The team was professional, knowledgeable, and went above and beyond our expectations.",
      name: "John Rodriguez",
      title: "Farm Owner, Dallas TX",
    },
    {
      quote:
        "We needed a custom commercial building for our business, and INSTA-SHED delivered exactly what we envisioned. The attention to detail and craftsmanship is remarkable. Highly recommend their services!",
      name: "Michelle Chen",
      title: "Business Owner, Houston TX",
    },
  ];

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-7xl font-bold text-gray-900 mb-4 text-left">
            What Our Clients <br /> Are Saying
          </h2>
        </div>

        {/* 2-column grid: Testimonial & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Testimonial */}
          <div className="bg-gray-50 p-8">
            <div className="text-5xl text-brand-orange mb-4 leading-none"></div>
            <blockquote className="text-xs sm:text-base text-gray-700 italic leading-relaxed mb-6">
              {testimonials[currentTestimonial].quote}
            </blockquote>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].title}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src={testimonialImage}
              alt="Happy customer with their completed metal building project"
              className="w-80 h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Bottom Center Navigation Icons */}
        <div className="flex justify-center mt-10 space-x-6">
          <button onClick={handlePrev}>
            <img
              src={icon13}
              alt="Previous testimonial button"
              className="w-10 h-10 cursor-pointer"
            />
          </button>
          <button onClick={handleNext}>
            <img src={icon12} alt="Next testimonial button" className="w-10 h-10 cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
}
