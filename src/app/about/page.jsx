"use client";

import { motion } from "framer-motion";
import { Users, Scissors, Star, Sparkles, Heart, Award, Clock, Shield,  } from "lucide-react";
import Layout from '@/components/Layout/Layout';
export default function AboutPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <Layout>
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-4">
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/4 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-full"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            About <span className="text-yellow-300 drop-shadow-md">Our Salon</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-light">
            Luxury | Style | Elegance ✨ – We bring out the best version of YOU.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-yellow-300 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl transform -rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1603252109303-2751441dd157"
              alt="Salon"
              className="relative rounded-2xl shadow-2xl z-10"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-0.5 bg-pink-500 mr-4"></div>
              <span className="text-pink-500 font-semibold tracking-wide">OUR STORY</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              We redefine <span className="text-pink-500">beauty</span> and{" "}
              <span className="text-purple-500">style</span>
            </h2>
            
            <p className="mt-6 text-gray-600 leading-relaxed">
              At <strong className="text-pink-500">Glamour Salon</strong>, we believe beauty is more than
              just looks – it's confidence, personality, and self-love.
              <br /><br />
              With a team of expert stylists, premium products, and a luxurious
              ambiance, we provide services that make you shine inside out. 💇‍♀️
            </p>
            
            <ul className="mt-8 space-y-4 text-gray-700">
              <li className="flex items-center gap-4 p-3 bg-pink-50 rounded-lg">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Scissors className="text-pink-500" size={20} />
                </div>
                Professional Stylists
              </li>
              <li className="flex items-center gap-4 p-3 bg-yellow-50 rounded-lg">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="text-yellow-500" size={20} />
                </div>
                5-Star Luxury Experience
              </li>
              <li className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Sparkles className="text-purple-500" size={20} />
                </div>
                Premium Products
              </li>
              <li className="flex items-center gap-4 p-3 bg-red-50 rounded-lg">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="text-red-500" size={20} />
                </div>
                10,000+ Happy Clients
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeIn} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-500 mb-2">15+</div>
              <div className="text-gray-600">Expert Stylists</div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">10K+</div>
              <div className="text-gray-600">Happy Clients</div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">50+</div>
              <div className="text-gray-600">Awards Won</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our <span className="text-pink-500">Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-pink-500" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Passion</h3>
                <p className="text-gray-600">We're passionate about making you look and feel your absolute best.</p>
              </div>
              
              <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-500" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for excellence in every service we provide.</p>
              </div>
              
              <div className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-yellow-500" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community</h3>
                <p className="text-gray-600">We believe in building a community where everyone feels welcome.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <Sparkles className="text-pink-500" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted salon brand by delivering excellence and 
                setting new beauty trends that empower our clients to express their unique beauty.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Star className="text-purple-500" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To create an atmosphere where you not only look glamorous but feel empowered. 
                We're committed to using the highest quality products and techniques to ensure your complete satisfaction.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Experience the Luxury? 💎
          </h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Book your appointment today and step into a world of style & glamour.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </section>
    </div>
   </Layout>
  );
}