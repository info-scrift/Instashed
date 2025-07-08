import heroImage2 from "../../../Gallery/galleryimage1.png";
import heroImage3 from "../../../Gallery/galleryimage2.png";
import heroImage4 from "../../../Gallery/galleryimage3.png";
import heroImage5 from "../../../Gallery/galleryimage4.png";
import heroImage6 from "../../../Gallery/galleryimage5.png";
import heroImage7 from "../../../Gallery/galleryimage6.png";
import galleryImage7 from "../../../Gallery/galleryimage7.png";
import galleryImage8 from "../../../Gallery/galleryimage8.png";
import galleryImage9 from "../../../Gallery/galleryimage9.png";
import heroImage8 from "../../../Image 15.png";
import heroImage9 from "../../../Image 16.png";

export default function GallerySection() {
  const galleryItems = [
    { image: heroImage2 },
    { image: heroImage3 },
    { image: heroImage4 },
    { image: heroImage5 },
    { image: heroImage6 },
    { image: heroImage7 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col lg:flex-row justify-between items-start gap-6">
          {/* Left - Subtext */}
          <p className="text-[30px] text-gray-700 text-left leading-snug">
            See our completed
            <br />
            <span>
              <span className="text-orange-500 font-semibold">projects</span>{" "}
              including
            </span>
          </p>

          {/* Right - Heading */}
          <h2 className="text-[80px] font-bold text-gray-900 text-right leading-tight">
            Gallery
          </h2>
        </div>

        {/* Custom Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* First Row - 3 images, each takes 4 columns (12 / 3 = 4) */}
          {galleryItems.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-4 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={item.image}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}

          {/* Second Row - 2 images, each takes 6 columns */}
          {galleryItems.slice(3, 5).map((item, index) => (
            <div
              key={index + 3}
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={item.image}
                  alt={`Gallery item ${index + 4}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
