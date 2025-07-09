import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage4 from "/ServicespageSingle4/service4image1.png";

export default function CommercialBuildings() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-6xl sm:text-7xl font-bold text-gray-900 mb-8">
            Commercial Steel <span className="text-orange-500">Buildings</span>
          </h1>
        </div>
      </section>

      {/* Hero Video Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12">
            <img
              src={heroImage4}
              alt="Commercial Steel Building"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all duration-200">
                <Play className="w-8 h-8 text-gray-800 ml-1" />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-16">
            <p className="text-lg text-gray-600 leading-relaxed">
              Designed for growth, our{" "}
              <span className="text-brand-orange font-medium">
                commercial steel buildings
              </span>{" "}
              are ideal for workshops, warehouses, and contractor depots. With
              custom dimensions, wide bay doors, and expansion options, your
              structure scales with your business.
            </p>
          </div>

          {/* Content and Image Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Perfect For and Example Use */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Perfect For:
                </h3>
                <p className="text-gray-600">
                  Small warehouse, shop space, business storage
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Example use:
                </h3>
                <p className="text-gray-600">
                  In Loveland, a contractor expanded their operation with a
                  30x60 prefab steel building for equipment and load.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <img
                src={heroImage4}
                alt="Commercial Building Interior"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />

      <Footer />
    </div>
  );
}
