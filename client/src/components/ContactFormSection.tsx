import { useState } from "react";
import icon7 from "../../../Icon 7.svg";
import icon8 from "../../../Icon 8.svg";
import icon9 from "../../../Icon 9.svg";
import icon10 from "../../../Icon 10.svg";
import icon11 from "../../../Icon 11.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    zipCode: "",
    serviceType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Try to submit to the API endpoint
      try {
        const response = await fetch('http://localhost:5001/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        const result = await response.json();
        
        if (result.success) {
          toast({
            title: "Message Sent!",
            description: "We'll get back to you within 24 hours.",
          });

          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            zipCode: "",
            serviceType: "",
          });
        } else {
          toast({
            title: "Error",
            description: result.error || "Failed to send message. Please try again.",
            variant: "destructive",
          });
        }
      } catch (apiError) {
        // Handle API connection errors (server not available)
        console.error('API connection error:', apiError);
        
        // For development: simulate successful submission when server is unavailable
        toast({
          title: "Development Mode",
          description: "Server is unavailable. Form submission simulated successfully.",
        });
        
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          zipCode: "",
          serviceType: "",
        });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#00373A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="text-white">
            <h3 className="text-3xl text-orange-500 mb-6">Business Hours</h3>
            <div className="space-y-3 mb-8">
              <p className="text-lg">Mon – Fri: 9 AM – 5 PM</p>
              <p className="text-lg">Saturday: 9 AM – 12 PM</p>
              <p className="text-lg">Sunday: Closed</p>
            </div>

            <h3 className="text-3xl text-orange-500 mb-6">InstaShed HQ</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={icon7} alt="Email contact icon" className="w-5 h-5" />
                <span className="text-lg">info@instashed.us</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={icon8} alt="Office location icon" className="w-5 h-5" />
                <span className="text-lg">
                  107 West Main Street #681 Terre Hill, PA 17581 USA
                </span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <img
                src={icon9}
                alt="Follow InstaShed on Instagram"
                className="w-8 h-8 cursor-pointer"
              />
              <img
                src={icon10}
                alt="Follow InstaShed on Facebook"
                className="w-8 h-8 cursor-pointer"
              />
              <img
                src={icon11}
                alt="Follow InstaShed on Twitter"
                className="w-8 h-8 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">
              Fill out the form and we'll call you <br /> back
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First Name (Required)"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  required
                  className="bg-transparent border-0 border-b border-gray-500 border-opacity-50 text-white placeholder:text-gray-300 focus:border-brand-orange rounded-none"
                />
                <Input
                  type="text"
                  placeholder="Last Name (Required)"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  required
                  className="bg-transparent border-0 border-b border-gray-500 border-opacity-50 text-white placeholder:text-gray-300 focus:border-brand-orange rounded-none"
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email (Required)"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="bg-transparent border-0 border-b border-gray-500 border-opacity-50 text-white placeholder:text-gray-300 focus:border-brand-orange rounded-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Zip Code / Area (Required)"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  required
                  className="bg-transparent border-0 border-b border-gray-500 border-opacity-50 text-white placeholder:text-gray-300 focus:border-brand-orange rounded-none"
                />

                <Select
                  value={formData.serviceType}
                  onValueChange={(value) =>
                    handleInputChange("serviceType", value)
                  }
                >
                  <SelectTrigger className="bg-transparent border-0 border-b border-gray-500 border-opacity-50 text-white focus:border-brand-orange rounded-none">
                    <SelectValue placeholder="Type of Service You're Interested In" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential-sheds">
                      Residential Sheds
                    </SelectItem>
                    <SelectItem value="agricultural-barns">
                      Agricultural Barns
                    </SelectItem>
                    <SelectItem value="prefab-garages">
                      Prefab Garages
                    </SelectItem>
                    <SelectItem value="commercial-buildings">
                      Commercial Buildings
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={4}
                className="bg-transparent border-0 border-b border-gray-500 border-opacity-50 text-white placeholder:text-gray-300 focus:border-brand-orange resize-none rounded-none"
              />
              <div className="text-right text-sm text-gray-300 mt-1">0/500</div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00373A] hover:bg-[#004f53] text-white font-semibold py-3 rounded-lg transition-colors border border-brand-orange"
              >
                {isSubmitting ? "Scheduling..." : "Schedule My Call"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
