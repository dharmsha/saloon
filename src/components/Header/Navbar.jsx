"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, Scissors, Phone, Instagram, Facebook } from "lucide-react";

export default function SalonNavbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      dropdown: [
        { name: "Haircut & Styling", href: "/services/haircut", icon: "✂️" },
        { name: "Hair Color & Highlights", href: "/services/haircolor", icon: "🎨" },
        { name: "Facial & Skincare", href: "/services/facial", icon: "✨" },
        { name: "Bridal & Party Makeup", href: "/services/makeup", icon: "💄" },
        { name: "Spa & Massage", href: "/services/spa", icon: "🌸" },
        { name: "Nail Art & Manicure", href: "/services/nails", icon: "💅" },
      ],
    },
    { name: "Packages", href: "/packages" },
    { name: "Gallery", href: "/gallery" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Wrapper with fixed position for both topbar & navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        
        {/* Top info bar */}
        <div className="w-full bg-gradient-to-r from-pink-700 to-purple-700 text-white text-sm py-2 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone size={14} className="mr-1" />
                <span>Book Now: (123) 456-7890</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-pink-200 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-pink-200 transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-white/95 shadow-lg py-2"
              : "bg-white/90 py-3"
          } backdrop-blur-md`}
        >
          <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
            {/* Logo */}
            <div className="flex items-center gap-2 text-pink-600 font-bold text-xl md:text-2xl tracking-wide">
              <div className="relative">
                <Scissors size={30} className="text-pink-500" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full"></div>
              </div>
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Glamour Salon
              </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
              {navItems.map((item, idx) => (
                <li key={idx} className="relative py-3">
                  {item.dropdown ? (
                    <div 
                      className="relative"
                      ref={dropdownRef}
                      onMouseEnter={() => setActiveDropdown("services")}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className="hover:text-pink-600 transition-colors font-semibold flex items-center"
                        onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                      >
                        {item.name}
                        <svg 
                          className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {activeDropdown === "services" && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                          {item.dropdown.map((service, serviceIdx) => (
                            <a
                              key={serviceIdx}
                              href={service.href}
                              className="flex items-center px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                            >
                              <span className="mr-2">{service.icon}</span>
                              {service.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="hover:text-pink-600 transition-colors font-semibold hover:scale-105 transition-transform block"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
              {/* Book Button */}
              <li>
                <a
                  href="/book"
                  className="ml-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
                >
                  Book Appointment
                </a>
              </li>
            </ul>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-gray-700 p-2 rounded-full hover:bg-pink-50 transition-colors"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="lg:hidden bg-white border-t border-gray-100 shadow-inner">
              <div className="container mx-auto px-4 py-4">
                <ul className="space-y-2">
                  {navItems.map((item, idx) => (
                    <li key={idx}>
                      {item.dropdown ? (
                        <div>
                          <button
                            className="w-full text-left py-2 px-4 text-gray-700 hover:bg-pink-50 rounded-md flex items-center justify-between"
                            onClick={() => setActiveDropdown(activeDropdown === "services-mobile" ? null : "services-mobile")}
                          >
                            <span>{item.name}</span>
                            <svg 
                              className={`h-4 w-4 transition-transform ${activeDropdown === "services-mobile" ? "rotate-180" : ""}`}
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {activeDropdown === "services-mobile" && (
                            <div className="pl-6 mt-1 space-y-1">
                              {item.dropdown.map((service, serviceIdx) => (
                                <a
                                  key={serviceIdx}
                                  href={service.href}
                                  className="flex items-center py-2 px-4 text-gray-600 hover:bg-pink-50 rounded-md"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="mr-2">{service.icon}</span>
                                  {service.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          className="block py-2 px-4 text-gray-700 hover:bg-pink-50 rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                  <li className="pt-2">
                    <a
                      href="/book"
                      className="block text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md"
                      onClick={() => setOpen(false)}
                    >
                      Book Appointment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Add padding-top to content so it doesn't hide behind navbar */}
      <div className="pt-[50px]"></div>
    </>
  );
}