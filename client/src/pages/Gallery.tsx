import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import galleryImage1 from "../../../Gallery/galleryimage1.png";
import galleryImage2 from "../../../Gallery/galleryimage2.png";
import galleryImage3 from "../../../Gallery/galleryimage3.png";
import galleryImage4 from "../../../Gallery/galleryimage4.png";
import galleryImage5 from "../../../Gallery/galleryimage5.png";
import galleryImage6 from "../../../Gallery/galleryimage6.png";
import galleryImage7 from "../../../Gallery/galleryimage7.png";
import galleryImage8 from "../../../Gallery/galleryimage8.png";
import galleryImage9 from "../../../Gallery/galleryimage9.png";
export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: galleryImage1,
      alt: "Steel Building Construction",
      className: "col-span-1 row-span-1",
    },
    {
      id: 2,
      src: galleryImage2,
      alt: "Modern Commercial Building",
      className: "col-span-1 row-span-1",
    },
    {
      id: 3,
      src: galleryImage3,
      alt: "Agricultural Pole Barn",
      className: "col-span-2 row-span-1",
    },
    {
      id: 4,
      src: galleryImage4,
      alt: "Steel Structure Framework",
      className: "col-span-1 row-span-1",
    },
    {
      id: 5,
      src: galleryImage5,
      alt: "Industrial Steel Building",
      className: "col-span-1 row-span-1",
    },
    {
      id: 6,
      src: galleryImage6,
      alt: "Commercial Steel Buildings",
      className: "col-span-1 row-span-1",
    },
    {
      id: 7,
      src: galleryImage7,
      alt: "Steel Building Complex",
      className: "col-span-1 row-span-1",
    },
    {
      id: 8,
      src: galleryImage8,
      alt: "Large Steel Warehouse",
      className: "col-span-1 row-span-1",
    },
    {
      id: 9,
      src: galleryImage9,
      alt: "Metal Storage Buildings",
      className: "col-span-2 row-span-1",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
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
            Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 bg-white pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Row 1 - Two equal images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Row 2 - Wide panoramic image */}
            <div className="aspect-[5/2] overflow-hidden rounded-lg">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Row 3 - Three images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={galleryImages[5].src}
                  alt={galleryImages[5].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Row 4 - Two images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={galleryImages[6].src}
                  alt={galleryImages[6].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={galleryImages[7].src}
                  alt={galleryImages[7].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Row 5 - Wide panoramic image */}
            <div className="aspect-[5/2] overflow-hidden rounded-lg">
              <img
                src={galleryImages[8].src}
                alt={galleryImages[8].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
