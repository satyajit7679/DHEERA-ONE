import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 w-full mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center sm:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-semibold mb-1">Stock Calculator</h2>
            <p className="text-sm text-gray-400">
              Simplifying stock calculations for smart investments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-1">Quick Links</h2>
            <ul className="space-y-1">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-1">Connect With Us</h2>
            <p className="text-sm text-gray-400 mb-2">
              Email:{" "}
              <a
                href="mailto:support@stockcalculator.com"
                className="underline"
              >
                support@stockcalculator.com
              </a>
            </p>
            <div className="flex justify-center sm:justify-start space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-lg"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-lg"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-lg"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-4 pt-3 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Stock Calculator. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
