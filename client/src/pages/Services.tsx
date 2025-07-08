import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
// Down arrow (collapsed)
// Up arrow (expanded)
import heroImage from "../../../ServicesPageAll/servicesimage3.png";
import icon6 from "../../../servicesallicon1.svg";
import icon7 from "../../../servicesallicon2.svg";
import heroImage1 from "../../../ServicesPageAll/servicesimage2.png";
import heroImage2 from "../../../ServicesPageAll/servicesimage1.png";
import heroImage3 from "../../../ServicesPageAll/servicesimage4.png";
export default function Services() {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const services = [
    {
      title: "Residential Metal Sheds",
      content: {
        image: heroImage2,
      },
    },
    {
      title: "Agricultural Pole Barns",
      content: {
        image: heroImage1,
      },
    },
    {
      title: "Prefab Steel Garages",
      content: {
        image: heroImage,
      },
    },
    {
      title: "Commercial Steel Buildings",
      content: {
        image: heroImage3,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section
        className="bg-white flex items-center justify-center"
        style={{ height: "150px" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <h1
            className="font-bold text-center mt-12 mb-12 px-4 text-8xl sm:text-[150px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 55, 58, 1) 0%, rgba(0, 55, 58, 0.4) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Services
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-8 bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                {/* Service Header */}
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-sm font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3
                      className={`text-lg ${
                        expandedSections.includes(index)
                          ? "text-orange-500 font-normal"
                          : "text-gray-900 font-semibold"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2">
                    <img
                      src={expandedSections.includes(index) ? icon7 : icon6}
                      alt={
                        expandedSections.includes(index) ? "Collapse" : "Expand"
                      }
                      className="w-5 h-5 flex-shrink-0"
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedSections.includes(index) && service.content && (
                  <div className="px-6 pb-8 border-t border-gray-100">
                    <div className="pt-6">
                      {/* Featured Image */}
                      <div className="mb-8">
                        <img
                          src={service.content.image}
                          alt={service.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>

                      {/* Service Details */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4"></h4>
                        </div>

                        {/* Right Column */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Service 1 */}
          <div>
            <div className="flex items-center mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mr-6"
                style={{ backgroundColor: "#D9D9D9" }}
              >
                <span className="text-lg font-bold text-gray-800">01</span>
              </div>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Residential Metal Sheds
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our{" "}
              <span className="text-orange-500">
                metal sheds for backyard storage
              </span>{" "}
              are built to protect your tools, supplies, and hobbies. Custom
              design options include windows, double doors, shelving, and lofts
              — all made from weather-resistant steel.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Perfect for:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Backyard tool shed, garden shed, DIY workshop
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Example use:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    A family in{" "}
                    <span className="text-orange-500">Hillsdale NY</span> built
                    a custom shed for woodworking with double doors and a
                    windowed loft.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-3">
                <img
                  src={heroImage2}
                  alt="Residential Metal Shed"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div>
            <div className="flex items-center mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mr-6"
                style={{ backgroundColor: "#D9D9D9" }}
              >
                <span className="text-lg font-bold text-gray-800">02</span>
              </div>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Agricultural Pole Barns
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our <span className="text-orange-500">steel pole barns</span> are
              engineered for rugged farm life. Built using rust-resistant
              galvanized panels, they protect tractors, hay, feed, and livestock
              year-round with wide, open interiors and minimal maintenance.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <img
                  src={heroImage1}
                  alt="Agricultural Pole Barn"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Perfect for:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Equipment storage, livestock shelter, farm operations
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Example use:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    A farm in Texas uses our pole barn to store hay, protect
                    livestock, and house farming equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div>
            <div className="flex items-center mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mr-6"
                style={{ backgroundColor: "#D9D9D9" }}
              >
                <span className="text-lg font-bold text-gray-800">03</span>
              </div>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Prefab Steel Garages
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Protect your vehicles and equipment with a custom-built{" "}
              <span className="text-orange-500">prefab steel garage</span>.
              Available in single, double, or triple-car formats, our garages
              feature reinforced walls, high-load roof panels, and optional
              ventilation or insulation.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Perfect for:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Vehicle protection, workshop space, commercial storage
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Example use:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    In Great Barrington, MA, a two-car prefab garage now houses
                    vintage motorcycles and gear.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-3">
                <img
                  src={heroImage}
                  alt="Prefab Steel Garage"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div>
            <div className="flex items-center mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mr-6"
                style={{ backgroundColor: "#D9D9D9" }}
              >
                <span className="text-lg font-bold text-gray-800">04</span>
              </div>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Commercial Steel Buildings
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Designed for growth, our{" "}
              <span className="text-orange-500">
                Commercial steel buildings
              </span>{" "}
              are ideal for warehouses, workshops, and commercial storage. Wide
              open design, multiple bay configurations, office space
              integration, and loading dock compatibility.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <img
                  src={heroImage3}
                  alt="Commercial Steel Building"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Perfect for:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Warehouse operations, manufacturing facilities
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Example use:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    In <span className="text-orange-500">New York</span>, a
                    contractor expanded their operation with a 30x60 prefab
                    steel building for equipment and load.
                  </p>
                </div>
              </div>
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
