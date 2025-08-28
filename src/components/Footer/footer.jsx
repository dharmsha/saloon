"use client";

import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pink-700 text-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-bold text-white">✨ Glamour Salon</h2>
          <p className="mt-3 text-sm">
            Where style meets perfection. We provide luxury hair, beauty & spa
            services to enhance your natural beauty and boost your confidence.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="/services" className="hover:text-yellow-300">Services</a></li>
            <li><a href="/packages" className="hover:text-yellow-300">Packages</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300">Haircut & Styling</a></li>
            <li><a href="#" className="hover:text-yellow-300">Hair Coloring</a></li>
            <li><a href="#" className="hover:text-yellow-300">Facial & Skincare</a></li>
            <li><a href="#" className="hover:text-yellow-300">Makeup & Bridal</a></li>
            <li><a href="#" className="hover:text-yellow-300">Spa & Massage</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={18} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> glamour@salon.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Connaught Place, New Delhi, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-500 mt-8 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Glamour Salon. All rights reserved.
      </div>
    </footer>
  );
}
