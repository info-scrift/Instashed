import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section
        className="bg-white flex items-center justify-center"
        style={{ height: "150px" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 mt-20">
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
            Contact Us
          </h1>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-white mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Let's <span className="text-orange-500">Talk</span> About
                <br />
                Your Next
                <br />
                Metal Building
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Looking to build a shed, garage, or barn? Submit your info and
                our team will give you a call to discuss your project — no
                pressure, just expert advice.
              </p>
            </div>

            {/* Right Column - Customer Service Image */}
            <div className="flex justify-center">
              <img
                src={"/contactimage1.png"}
                alt="Friendly InstaShed customer service representative ready to help with your metal building project"
                className="w-80 h-96 object-cover rounded-lg"
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
