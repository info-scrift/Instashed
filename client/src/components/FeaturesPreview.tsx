import { Shield, Zap, Settings, Home, Users } from "lucide-react";

export default function FeaturesPreview() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - 2 Boxes Matching Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Top Left Box */}
          <div className="bg-white p-6 border border-gray-200 shadow-sm min-h-[320px]">
            <div className="mb-4">
              <img
                src={"/icon1.svg"}
                alt="Weather Resistant Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Weather Resistant Strength
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our galvanized steel sheds and garages stand strong in snow,
                rain, wind, and sun.
              </p>
            </div>
          </div>

          {/* Top Right Heading (spans 3 columns to align with 3 boxes below) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 relative mb-12">
            <div className="absolute bottom-4 right-0 p-4 text-right">
              {/* Decorative Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-500" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-500" />

              {/* Heading Text */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600">
                Why Choose ?
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                InstaShed
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom Section - 4 Equal Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {["/icon2.svg", "/icon3.svg", "/icon4.svg", "/icon5.svg"].map((icon, i) => (
            <div
              key={i}
              className="bg-white p-6 border border-gray-200 shadow-sm min-h-[320px]"
            >
              <div className="mb-4">
                <img src={icon} alt={`${[
                      "Fast Setup",
                      "Customizable",
                      "Value",
                      "Trusted"
                    ][i]} icon`} className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {
                    [
                      "Fast, Professional Setup",
                      "Fully Customizable",
                      "More Value Than Wood",
                      "Local & Trusted by Thousands",
                    ][i]
                  }
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our galvanized steel sheds and garages stand strong in snow,
                  rain, wind, and sun.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
