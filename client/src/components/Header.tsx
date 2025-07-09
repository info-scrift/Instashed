import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import logoSvg from "/intashedlogo.svg";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const getNavLinkClass = (path: string) => {
    return isActive(path)
      ? "text-orange-500 font-medium hover:text-brand-orange-hover transition-colors duration-200 cursor-pointer"
      : "text-gray-700 hover:text-brand-orange transition-colors duration-200 cursor-pointer";
  };

  const getMobileNavLinkClass = (path: string) => {
    return isActive(path)
      ? "block px-3 py-2 text-brand-orange font-medium cursor-pointer"
      : "block px-3 py-2 text-gray-700 hover:text-brand-orange cursor-pointer";
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <img src={logoSvg} alt="INSTA-SHED Logo" className="w-20 h-14" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/">
              <span className={getNavLinkClass("/")}>Home</span>
            </Link>
            <Link href="/about">
              <span className={getNavLinkClass("/about")}>About us</span>
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link href="/services">
                <span
                  className={`${getNavLinkClass("/services")} flex items-center`}
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </span>
              </Link>

              {/* Services Dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link href="/services/residential-sheds">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors duration-200 cursor-pointer">
                      Residential Metal Sheds
                    </span>
                  </Link>
                  <Link href="/services/agricultural-barns">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors duration-200 cursor-pointer">
                      Agricultural Pole Barns
                    </span>
                  </Link>
                  <Link href="/services/prefab-garages">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors duration-200 cursor-pointer">
                      Prefab Steel Garages
                    </span>
                  </Link>
                  <Link href="/services/commercial-buildings">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors duration-200 cursor-pointer">
                      Commercial Steel Buildings
                    </span>
                  </Link>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link href="/services">
                      <span className="block px-4 py-2 text-brand-orange font-medium hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                        View All Services
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/gallery">
              <span className={getNavLinkClass("/gallery")}>Gallery</span>
            </Link>
            <Link href="/quote">
              <span className={getNavLinkClass("/quote")}>Request a Quote</span>
            </Link>
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <Button className="bg-brand-orange text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-orange-hover transition-colors duration-200">
                Contact Us
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-brand-orange"
              onClick={toggleMobileMenu}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t">
            <Link href="/">
              <span className={getMobileNavLinkClass("/")}>Home</span>
            </Link>
            <Link href="/about">
              <span className={getMobileNavLinkClass("/about")}>About us</span>
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`flex items-center justify-between w-full px-3 py-2 cursor-pointer ${
                  isActive("/services")
                    ? "text-brand-orange font-medium"
                    : "text-gray-700 hover:text-brand-orange"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-6 space-y-1">
                  <Link href="/services">
                    <span className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-orange cursor-pointer">
                      All Services
                    </span>
                  </Link>
                  <Link href="/services/residential-sheds">
                    <span className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-orange cursor-pointer">
                      Residential Metal Sheds
                    </span>
                  </Link>
                  <Link href="/services/agricultural-barns">
                    <span className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-orange cursor-pointer">
                      Agricultural Pole Barns
                    </span>
                  </Link>
                  <Link href="/services/prefab-garages">
                    <span className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-orange cursor-pointer">
                      Prefab Steel Garages
                    </span>
                  </Link>
                  <Link href="/services/commercial-buildings">
                    <span className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-orange cursor-pointer">
                      Commercial Steel Buildings
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/gallery">
              <span className={getMobileNavLinkClass("/gallery")}>Gallery</span>
            </Link>
            <Link href="/quote">
              <span className={getMobileNavLinkClass("/quote")}>
                Request a Quote
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
