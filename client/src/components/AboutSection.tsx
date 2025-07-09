import heroImage6 from "/Image 13.png";
import aboutIcon1 from "/AboutUs/aboutusicon1.svg";

export default function AboutSection() {
  const values = [
    {
      title: "Craftsmanship",
      description: "Attention to detail in every weld and bolt.",
    },
    {
      title: "Durability",
      description: "Buildings that stand the test of time and climate.",
    },
    {
      title: "Integrity",
      description: "Clear pricing, no hidden fees, full-service support.",
    },
  ];

  return (
    <section
      className="py-20 bg-gray-900 text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('${heroImage6}')`,
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: About Us + SVG */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Text */}
          <h2 className="text-4xl sm:text-5xl font-bold text-left w-full md:w-1/2 mb-6 md:mb-0">
            About Us
          </h2>
          {/* SVG Image */}
          <div className="w-32 h-32 md:w-40 md:h-40">
            <img
              src={aboutIcon1}
              alt="InstaShed company values and craftsmanship icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-left mb-2">Our Story</h3>
          <p className="text-left text-gray-300 max-w-4xl">
            InstaShed was founded in 2010 to help customers replace costly
            rentals and rotting wood sheds with reliable, long-lasting custom
            metal buildings. We’ve helped thousands of clients protect what
            matters most — from Canton CT backyards to New York farmlands.
          </p>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-left mb-2">Our Values</h3>
          <p className="text-left text-gray-300 max-w-4xl mb-8">
            We don’t just build buildings — we create lasting value and reliable
            spaces where life and work can thrive.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="border-l-4 p-6 h-full w-full text-center"
                style={{
                  backgroundColor: "rgba(255, 122, 50, 0.1)", // Slight transparency
                  borderColor: "rgba(255, 122, 50, 1)",
                }}
              >
                <div className="font-semibold text-white mb-2 text-lg">
                  {val.title}
                </div>
                <p className="text-sm text-gray-100">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
