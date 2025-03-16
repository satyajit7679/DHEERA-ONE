import { Mail, Phone, MapPin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-6 md:p-10">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mt-2">
            We’d love to hear from you!
          </p>

          {/* Contact Form */}
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md focus:ring-2 focus:rigray-900"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-gray-900"
            ></textarea>
            <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-900 transition duration-300">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-gray-900" />
              <p className="mt-2 text-gray-700">info@example.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-gray-900" />
              <p className="mt-2 text-gray-700">+91 98765 43210</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-gray-900" />
              <p className="mt-2 text-gray-700">New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
