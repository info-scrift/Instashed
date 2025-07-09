import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "/ServicesPageAll/servicesimage3.png";
import heroImage1 from "/ServicesPageAll/servicesimage2.png";
import heroImage2 from "/ServicesPageAll/servicesimage1.png";
import heroImage3 from "/ServicesPageAll/servicesimage4.png";
import icon1 from "/Icon 14.svg";

export default function ServicesSection() {
  const services = [
    {
      title: "Residential Metal Sheds",
      image: heroImage,
      url: "/services/residential-sheds",
    },
    {
      title: "Prefab Steel Garages",
      image: heroImage1,
      url: "/services/prefab-garages",
    },
    {
      title: "Agricultural Pole Barns",
      image: heroImage2,
      url: "/services/agricultural-barns",
    },
    {
      title: "Commercial Steel Buildings",
      image: heroImage3,
      url: "/services/commercial-buildings",
    },
  ];

  const renderCard = (service: {
    title: string;
    image: string;
    url: string;
  }) => (
    <div className="w-full sm:w-[90%] md:w-[500px] flex flex-col items-start space-y-4">
      {/* Image Card */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Title + Icon (outside the card) */}
      <div className="flex items-center justify-between w-full px-1">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
          {service.title}
        </h3>
        <Link href={service.url}>
          <img
            src={icon1}
            alt="View service details"
            className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:opacity-75 transition-opacity duration-200"
          />
        </Link>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-gray-900 text-4xl sm:text-5xl md:text-[80px] font-bold leading-tight mb-6">
            Services
            <br />
            We Offer
          </h2>
          {renderCard(services[0])}
          {renderCard(services[1])}
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-10 items-end md:items-end relative">
          {/* Button on top - reposition on mobile */}
          <div className="absolute -top-16 sm:-top-20 right-0 z-10 hidden sm:flex">
            <Button
              variant="outline"
              className="px-4 py-2 border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50"
            >
              Request a Free Quote
            </Button>
          </div>
          {renderCard(services[2])}
          {renderCard(services[3])}

          {/* Bottom CTA Button */}
          <div className="pt-4 self-center md:self-auto">
            <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 text-base rounded-md font-semibold">
              Find an Installer Near You
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -top-16 sm:-top-20 right-0 z-10 hidden sm-hidden">
        <Button
          variant="outline"
          className="px-4 py-2 border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50"
        >
          Request a Free Quote
        </Button>
      </div>
    </section>
  );
}
