import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage1 from "/RequestaQuote/reqaquoteimage1.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: string[];
  serviceType: string;
  length: string;
  width: string;
  height: string;
  intendedUse: string[];
  sidingMaterial: string[];
  windowType: string;
  doorType: string;
  shelving: string[];
  workbench: string[];
  preferredInstallationDate: string;
  budget: string;
  howDidYouHear: string;
  workshopUse: string;
  otherUse: string;
  numberOfWindows: string;
  windowSize: string;
}

export default function Quote() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContact: [],
    serviceType: "",
    length: "",
    width: "",
    height: "",
    intendedUse: [],
    sidingMaterial: [],
    windowType: "",
    doorType: "",
    shelving: [],
    workbench: [],
    preferredInstallationDate: "",
    budget: "",
    howDidYouHear: "",
    workshopUse: "",
    otherUse: "",
    numberOfWindows: "",
    windowSize: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => {
      const currentValues = (prev[field] as string[]) || [];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [field]: currentValues.filter((item: string) => item !== value),
        } as FormData;
      } else {
        return {
          ...prev,
          [field]: [...currentValues, value],
        } as FormData;
      }
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('Quote request submitted successfully! We will contact you soon.');
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          preferredContact: [],
          serviceType: "",
          length: "",
          width: "",
          height: "",
          intendedUse: [],
          sidingMaterial: [],
          windowType: "",
          doorType: "",
          shelving: [],
          workbench: [],
          preferredInstallationDate: "",
          budget: "",
          howDidYouHear: "",
          workshopUse: "",
          otherUse: "",
          numberOfWindows: "",
          windowSize: "",
        });
      } else {
        alert('Failed to submit quote request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section
        className="bg-white flex items-center justify-center"
        style={{ height: "150px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
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
            Request Quote
          </h1>
        </div>
      </section>

      {/* Header Section with Content and Image */}
      <section className="py-8 bg-white pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-6">
                Request a<br />
                Quote
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get Your Custom Metal Building Quote Today
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Looking for a durable, cost-effective storage solution? Our
                expert team can help you find the perfect metal shed or building
                that meets your needs and budget. Fill out our form to get a
                personalized quote today.
              </p>
            </div>

            {/* Right Column - Hero Image */}
            <div>
              <img
                src={heroImage1}
                alt="Professional team discussing custom metal building project with clients"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Form Section - Full Width */}
          <div className="p-8 rounded-lg">
            <h3
              className="text-2xl font-bold text-gray-900 pl-4 border-l-4 border-orange-500 py-3 inline-block mb-8"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 165, 0, 0.1) 0%, rgba(255, 165, 0, 0) 100%)",
              }}
            >
              Fill the Form
            </h3>
            <form onSubmit={handleSubmit} className="w-full space-y-8">
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Personal Information
                  </h4>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="ZIP Code"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Preferred Contact Method
                  </h4>
                  <div className="flex space-x-8">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact?.includes("email")}
                        onChange={(e) =>
                          handleCheckboxChange(
                            "preferredContact",
                            e.target.value,
                          )
                        }
                        className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact?.includes("phone")}
                        onChange={(e) =>
                          handleCheckboxChange(
                            "preferredContact",
                            e.target.value,
                          )
                        }
                        className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">Call</span>
                    </label>
                  </div>
                </div>

                {/* Type of Service */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Type of Structure
                  </h4>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("serviceType", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential-metal-shed">
                        Residential Metal Shed
                      </SelectItem>
                      <SelectItem value="prefab-steel-garage">
                        Prefab Steel Garage
                      </SelectItem>
                      <SelectItem value="agricultural-pole-barn">
                        Agricultural Pole Barn
                      </SelectItem>
                      <SelectItem value="commercial-steel-building">
                        Commercial Steel Building
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Desired Dimensions */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Desired Dimensions
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Length"
                      value={formData.length}
                      onChange={(e) =>
                        handleInputChange("length", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Width"
                      value={formData.width}
                      onChange={(e) =>
                        handleInputChange("width", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Height"
                      value={formData.height}
                      onChange={(e) =>
                        handleInputChange("height", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Intended Use */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Intended Use
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <label className="flex items-center cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <input
                        type="checkbox"
                        value="equipment-storage"
                        checked={formData.intendedUse?.includes(
                          "equipment-storage",
                        )}
                        onChange={(e) =>
                          handleCheckboxChange("intendedUse", e.target.value)
                        }
                        className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="text-gray-700 font-medium">
                        Equipment storage
                      </span>
                    </label>
                    <label className="flex items-center cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <input
                        type="checkbox"
                        value="workshop"
                        checked={formData.intendedUse?.includes("workshop")}
                        onChange={(e) =>
                          handleCheckboxChange("intendedUse", e.target.value)
                        }
                        className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="text-gray-700 font-medium">
                        Workshop
                      </span>
                    </label>
                    <label className="flex items-center cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <input
                        type="checkbox"
                        value="home-garage"
                        checked={formData.intendedUse?.includes("home-garage")}
                        onChange={(e) =>
                          handleCheckboxChange("intendedUse", e.target.value)
                        }
                        className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="text-gray-700 font-medium">
                        Home Garage
                      </span>
                    </label>
                  </div>
                </div>

                {/* Siding Material */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Siding Material
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <input
                        type="checkbox"
                        value="galvanized"
                        checked={formData.sidingMaterial?.includes("galvanized")}
                        onChange={(e) =>
                          handleCheckboxChange("sidingMaterial", e.target.value)
                        }
                        className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="text-gray-700 font-medium">
                        Galvanized
                      </span>
                    </label>
                    <label className="flex items-center cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <input
                        type="checkbox"
                        value="painted"
                        checked={formData.sidingMaterial?.includes("painted")}
                        onChange={(e) =>
                          handleCheckboxChange("sidingMaterial", e.target.value)
                        }
                        className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="text-gray-700 font-medium">
                        Painted
                      </span>
                    </label>
                  </div>
                </div>

                {/* Window Type */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Window Type
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Number of Windows"
                      value={formData.numberOfWindows || ""}
                      onChange={(e) =>
                        handleInputChange("numberOfWindows", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Window Size"
                      value={formData.windowSize || ""}
                      onChange={(e) =>
                        handleInputChange("windowSize", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Door Type */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Door Type
                  </h4>
                  <input
                    type="text"
                    placeholder="Standard"
                    value={formData.doorType}
                    onChange={(e) =>
                      handleInputChange("doorType", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>

                {/* Shelving and Work Bench */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Shelving
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      <label className="flex items-center cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <input
                          type="checkbox"
                          value="yes"
                          checked={formData.shelving?.includes("yes")}
                          onChange={(e) =>
                            handleCheckboxChange("shelving", e.target.value)
                          }
                          className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                        />
                        <span className="text-gray-700 font-medium">Yes</span>
                      </label>
                      <label className="flex items-center cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <input
                          type="checkbox"
                          value="no"
                          checked={formData.shelving?.includes("no")}
                          onChange={(e) =>
                            handleCheckboxChange("shelving", e.target.value)
                          }
                          className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                        />
                        <span className="text-gray-700 font-medium">No</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Work Bench
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      <label className="flex items-center cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <input
                          type="checkbox"
                          value="yes"
                          checked={formData.workbench?.includes("yes")}
                          onChange={(e) =>
                            handleCheckboxChange("workbench", e.target.value)
                          }
                          className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                        />
                        <span className="text-gray-700 font-medium">Yes</span>
                      </label>
                      <label className="flex items-center cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <input
                          type="checkbox"
                          value="no"
                          checked={formData.workbench?.includes("no")}
                          onChange={(e) =>
                            handleCheckboxChange("workbench", e.target.value)
                          }
                          className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                        />
                        <span className="text-gray-700 font-medium">No</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Preferred Installation Date and Budget */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Preferred Installation Date
                    </h4>
                    <input
                      type="date"
                      value={formData.preferredInstallationDate}
                      onChange={(e) =>
                        handleInputChange(
                          "preferredInstallationDate",
                          e.target.value,
                        )
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Budget if Any
                    </h4>
                    <input
                      type="text"
                      placeholder="Enter budget"
                      value={formData.budget}
                      onChange={(e) =>
                        handleInputChange("budget", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* How Did You Hear About Us */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    How Did You Hear About Us?
                  </h4>
                  <textarea
                    rows={4}
                    placeholder="Tell us how you found out about InstaShed"
                    value={formData.howDidYouHear}
                    onChange={(e) =>
                      handleInputChange("howDidYouHear", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors duration-200 py-4 text-lg font-semibold"
                >
                  Submit Your Form
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
