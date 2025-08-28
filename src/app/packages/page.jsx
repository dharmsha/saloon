"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Clock, Heart, Star, Check, Sparkles, Calendar } from "lucide-react";
import Layout from '@/components/Layout/Layout';
export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: "Basic Glam",
      price: "₹1,499",
      originalPrice: "₹2,499",
      duration: "60 mins",
      services: ["Haircut & Styling", "Basic Facial", "Manicure"],
      description: "Perfect for a quick refresh and everyday look",
      popular: false,
      bestValue: false,
      emoji: "💇‍♀️"
    },
    {
      id: 2,
      name: "Premium Glow",
      price: "₹3,999",
      originalPrice: "₹5,999",
      duration: "120 mins",
      services: ["Haircut & Blow Dry", "Premium Facial", "Manicure & Pedicure", "Makeup"],
      description: "Our most popular package for special occasions",
      popular: true,
      bestValue: false,
      emoji: "✨"
    },
    {
      id: 3,
      name: "Luxury Royal",
      price: "₹6,999",
      originalPrice: "₹9,999",
      duration: "180 mins",
      services: ["Hair Spa & Styling", "Luxury Facial", "Manicure & Pedicure", "Professional Makeup", "Head Massage", "Foot Soak"],
      description: "The ultimate pampering experience for royalty",
      popular: false,
      bestValue: true,
      emoji: "👑"
    },
    {
      id: 4,
      name: "Bridal Bliss",
      price: "₹12,999",
      originalPrice: "₹17,999",
      duration: "240 mins",
      services: ["Bridal Hair Styling", "Bridal Makeup", "Luxury Facial", "Manicure & Pedicure", "Body Polish", "Pre-bridal Consultation"],
      description: "Complete bridal package for your special day",
      popular: false,
      bestValue: false,
      emoji: "💖"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-12">
      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Our <span className="text-pink-500">Premium Packages</span>
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
          Discover our carefully curated packages designed to give you the perfect salon experience at the best value.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="flex items-center bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
            <Sparkles size={16} className="mr-2" />
            <span>Professional Services</span>
          </div>
          <div className="flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
            <Star size={16} className="mr-2" />
            <span>Premium Products</span>
          </div>
          <div className="flex items-center bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
            <Heart size={16} className="mr-2" />
            <span>Luxury Experience</span>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeIn}
              className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                pkg.popular ? "border-2 border-pink-400" : "border border-gray-200"
              } ${pkg.bestValue ? "ring-2 ring-yellow-400" : ""}`}
              onMouseEnter={() => setSelectedPackage(pkg.id)}
              onMouseLeave={() => setSelectedPackage(null)}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  MOST POPULAR
                </div>
              )}
              
              {/* Best value badge */}
              {pkg.bestValue && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  BEST VALUE
                </div>
              )}

              {/* Package header */}
              <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 text-center">
                <div className="text-4xl mb-2">{pkg.emoji}</div>
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <div className="flex items-baseline justify-center mt-4">
                  <span className="text-3xl font-extrabold">{pkg.price}</span>
                  <span className="ml-2 text-sm line-through opacity-80">{pkg.originalPrice}</span>
                </div>
                <div className="flex items-center justify-center mt-2 text-sm">
                  <Clock size={14} className="mr-1" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Package content */}
              <div className="bg-white p-6">
                <p className="text-gray-600 text-sm mb-6 text-center">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedPackage === pkg.id 
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg" 
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}>
                  {selectedPackage === pkg.id ? (
                    <span className="flex items-center justify-center">
                      <Calendar size={18} className="mr-2" />
                      Book Now
                    </span>
                  ) : (
                    "Select Package"
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Can I customize a package?
              </h3>
              <p className="text-gray-600">
                Absolutely! We understand everyone has unique needs. Visit our salon or call us to discuss custom package options tailored just for you.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Are the products used premium quality?
              </h3>
              <p className="text-gray-600">
                Yes, we use only premium, professional-grade products from trusted brands to ensure the best results for your hair and skin.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                How far in advance should I book?
              </h3>
              <p className="text-gray-600">
                We recommend booking at least 3-5 days in advance for weekday appointments and 1-2 weeks in advance for weekends.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Do you offer group packages?
              </h3>
              <p className="text-gray-600">
                Yes, we have special group packages for bridal parties, birthdays, and other celebrations. Contact us for more details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Glamour?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Book your package today and let our experts bring out your inner beauty with our premium services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Book Appointment
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Call Now: (123) 456-7890
            </button>
          </div>
        </motion.div>
      </section>
    </div>
    </Layout>
  );
}