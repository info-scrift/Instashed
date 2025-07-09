import buildingImage from "/Image 17.png"; // ✅ Confirmed image path
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonial = {
    name: "Sarah Johnson",
    location: "Austin, TX",
    rating: 5,
    text: "INSTA-SHED built us the perfect workshop for our woodworking business. The quality is outstanding and the installation was professional and timely.",
    project: "Custom Workshop Building",
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-left">
          What Our Clients Are Saying{" "}
          <span className="inline-block align-middle ml-2 text-gray-400">
            ↓
          </span>
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Testimonial */}
          <div className="flex flex-col justify-center h-full">
            <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Reviewer Info */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4" />
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.location}
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition">
                <FaArrowLeft className="text-white text-sm" />
              </button>
              <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition">
                <FaArrowRight className="text-white text-sm" />
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="w-full">
            <img
              src={buildingImage}
              alt="Completed InstaShed custom metal building project showcasing quality craftsmanship"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
