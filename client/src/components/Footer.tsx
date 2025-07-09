import { Link } from "wouter";
import instaShedLogo from "/intashedlogo.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                src={instaShedLogo}
                alt="InstaShed - Premium Metal Buildings and Custom Storage Solutions"
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm max-w-md">
              InstaShed was founded in 2010 to help customers replace costly
              rentals and rotting wood sheds with reliable, long-lasting custom
              metal buildings. We've helped thousands of clients turn from
              Canton CT backyards to New York farmlands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-600 hover:text-brand-orange transition-colors duration-200 cursor-pointer text-sm">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-600 hover:text-brand-orange transition-colors duration-200 cursor-pointer text-sm">
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-600 hover:text-brand-orange transition-colors duration-200 cursor-pointer text-sm">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <span className="text-gray-600 hover:text-brand-orange transition-colors duration-200 cursor-pointer text-sm">
                    Shop
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-600 hover:text-brand-orange transition-colors duration-200 cursor-pointer text-sm">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-600 hover:text-brand-orange transition-colors duration-200 cursor-pointer text-sm">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Contact Us
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Building No 66 New York</p>
              <p className="text-gray-600 text-sm">+1 (234)567890</p>
              <p className="text-gray-600 text-sm">info@instashed.com</p>
            </div>
          </div>

          {/* Follow - Right Aligned */}
          {/* Follow - Right Aligned and Vertical */}
          <div className="flex flex-col items-start md:items-end text-left">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow</h3>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-600 text-sm">Facebook</p>
              <p className="text-gray-600 text-sm">LinkedIn</p>
              <p className="text-gray-600 text-sm">Instagram</p>
              <p className="text-gray-600 text-sm">X</p>
              <p className="text-gray-600 text-sm">Youtube</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              Copyright © 2025 | All right reserved by InstaShed
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms">
                <span className="text-gray-500 hover:text-brand-orange transition-colors duration-200 cursor-pointer">
                  Terms & Conditions
                </span>
              </Link>
              <Link href="/privacy">
                <span className="text-gray-500 hover:text-brand-orange transition-colors duration-200 cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-500 hover:text-brand-orange transition-colors duration-200 cursor-pointer">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
