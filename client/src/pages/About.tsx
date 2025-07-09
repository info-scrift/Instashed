import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HomePageFAQ from "@/components/HomePageFAQ";
import ContactFormSection from "@/components/ContactFormSection";
import heroImage3 from "/AboutUs/aboutusimage1.png";
import heroImage4 from "/AboutUs/aboutusimage2.png";
import aboutIcon1 from "/AboutUs/aboutusicon1.svg";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section
        className="bg-white flex items-center justify-center"
        style={{ height: "150px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
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
            About Us
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-8 bg-white pt-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={heroImage3}
                alt="InstaShed Building"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative">
              <div className="flex items-start">
                <div className="relative">
                  <h2 className="text-6xl font-bold mb-6 flex items-center">
                    <span className="text-orange-500 relative inline-block">
                      Our
                    </span>
                    <span className="ml-2 text-gray-900">Story</span>
                  </h2>
                  <div
                    className="absolute left-4 top-14 w-[3px] h-[200px]"
                    style={{
                      background:
                        "linear-gradient(to bottom, #F97316, transparent)",
                    }}
                  ></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 ml-10">
                InstaShed was founded in 2010 to help customers replace costly
                rentals and rotting wood sheds with reliable, long-lasting
                custom metal buildings. We've helped thousands of clients
                protect what matters most from Canton CT backyards to New York
                farmlands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="flex items-start">
                <div className="relative">
                  <h2 className="text-6xl font-bold mb-6 flex items-center">
                    <span className="text-orange-500 relative">Our</span>
                    <span className="ml-2 text-gray-900">Values</span>
                  </h2>
                  <div
                    className="absolute left-4 top-14 w-[3px] h-[200px]"
                    style={{
                      background:
                        "linear-gradient(to bottom, #F97316, transparent)",
                    }}
                  ></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 ml-10">
                We don’t just build buildings — we create lasting value and
                reliable spaces where life and work can thrive.
              </p>

              <div className="grid grid-cols-2 gap-8 ml-10">
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-orange mb-2">
                    20+
                  </div>
                  <div className="text-lg text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-brand-orange mb-2">
                    5K+
                  </div>
                  <div className="text-lg text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Orange background with icon */}
            <div className="relative flex flex-col items-center justify-center">
              <img
                src={aboutIcon1}
                alt="Values Icon"
                style={{
                  width: "212.6px",
                  height: "122px",
                  zIndex: 1,
                  position: "relative",
                }}
              />
              <div
                style={{
                  width: "401px",
                  height: "89px",
                  backgroundColor: "#F97316",
                  borderRadius: "8px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 0,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Founder Section */}
      {/* Our Founder Section */}
      {/* Our Founder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
            {/* Left Image (Founder) */}
            <div className="relative z-10">
              <img
                src={heroImage4}
                alt="Founder"
                className="w-full max-w-[424px] max-h-[585px] object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Right Side with Border and Overlapping Button */}
            <div className="relative">
              {/* Border Box: 10% from top and bottom of image */}
              <div
                className="absolute w-[calc(100%+150px)] border border-gray-300 rounded-xl z-0"
                style={{
                  top: "-40%",
                  bottom: "-40%",
                  left: "-140px",
                }}
              ></div>

              <div className="relative z-10 px-8 py-6 ml-[-40px]">
                {" "}
                {/* Moved content left here */}
                {/* Title with orange gradient line */}
                <div className="flex items-start">
                  <div className="relative">
                    <h2 className="text-8xl sm:text-6xl font-bold mb-4 flex items-center">
                      <span className="text-orange-500 relative text-5xl">
                        Our
                      </span>
                      <span className="ml-2 text-gray-900 text-5xl">
                        Founder
                      </span>
                    </h2>
                    <div
                      className="absolute left-4 top-13 w-[4px] h-[120px]"
                      style={{
                        background:
                          "linear-gradient(to bottom, #F97316, transparent)",
                      }}
                    ></div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 ml-8">
                  With{" "}
                  <span className="text-orange-500 font-semibold">20+</span>{" "}
                  years of construction experience, Jeremy launched InstaShed to
                  deliver affordable metal storage solutions with high-quality
                  craftsmanship and honest service.
                </p>
                {/* Overlapping Name Button */}
                <div className="bg-orange-500 text-white px-6 py-3 inline-block font-medium text-center relative -mt-4 shadow-lg mx-auto md:ml-[-200px] md:mx-0">
                  Jeremy Zimmerman – Founder & CEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomePageFAQ />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
