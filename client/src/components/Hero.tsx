import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import svg1 from "/Subtract.svg";
import { useState } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[1240px] h-[818px] mx-auto rounded-3xl overflow-hidden bg-white">
          {/* SVG as main background image */}
          <img
            src={svg1}
            alt="InstaShed metal building construction site hero background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Overlay */}

          {/* Content */}
          <div className="relative z-20 flex items-center h-full px-8 lg:px-16">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Sheds Built To Last.
                <br />
                <span className="text-white">Designed For You.</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                Premium Metal Sheds, Prefab Steel Garages, And Outdoor Storage
                Buildings Engineered For Long-Term Durability, Functionality,
                And Peace Of Mind.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button className="bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-orange-hover transform hover:scale-105 transition-all duration-200 shadow-lg h-auto">
                    Get a Free Quote
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="bg-gray-800 bg-opacity-80 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-100 transition-all duration-200 border border-gray-600 h-auto"
                  >
                    Explore Structures
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slider dots */}
          <div className="absolute bottom-6 right-16 z-30 flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === idx
                    ? "bg-brand-orange"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
