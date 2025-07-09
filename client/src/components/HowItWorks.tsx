import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "/Image 2.png";
import heroImage1 from "/Image 3.png";
import heroImage2 from "/Image 4.png";
import backgroundimg from "/howitsworkbg.png";
export default function HowItWorks() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start">
        {/* Left Side */}
        <div className="flex flex-col space-y-10">
          {/* Heading */}
          <h2 className="text-white text-6xl md:text-7xl font-bold leading-tight mb-4">
            How
            <br />
            It Works?
          </h2>

          {/* Card 1 */}
          <div className="w-full max-w-md relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroImage1}
                alt="Custom Build"
                className="h-[24rem] w-full object-cover"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg -mt-24 mx-auto w-[85%] relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Custom Build
              </h3>
              <p className="text-base text-gray-600">
                We help you plan the right metal storage shed, garage, or pole
                barn based on your space and needs.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="pt-4 flex justify-center mr-20 mt-20 hidden sm:flex">
            <Link href="/quote">
              <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 text-base rounded-md font-semibold">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-14 items-end mr-auto mt-10">
          {/* Card 2 */}
          <div className="w-full max-w-md relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Free Consultation"
                className="h-[24rem] w-full object-cover"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg -mt-24 mx-auto w-[85%] relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <span className="text-orange-500">Free</span> Consultation
              </h3>
              <p className="text-base text-gray-600">
                We help you plan the right metal storage shed, garage, or pole
                barn based on your space and needs.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-md relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroImage2}
                alt="Delivery & Installation"
                className="h-[24rem] w-full object-cover"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg -mt-24 mx-auto w-[85%] relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Delivery & Installation
              </h3>
              <p className="text-base text-gray-600">
                Our team handles delivery and professional steel building
                installation with precise leveling and anchoring.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 flex justify-center sm:hidden">
        <Link href="/quote">
          <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 text-base rounded-md font-semibold">
            Get Free Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
}
