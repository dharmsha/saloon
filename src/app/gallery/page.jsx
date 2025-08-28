"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Scissors, Heart, Sparkles, ZoomIn } from "lucide-react";
import Layout from '@/components/Layout/Layout';
export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Services", emoji: "✨" },
    { id: "hair", name: "Hair Styling", emoji: "💇‍♀️" },
    { id: "makeup", name: "Makeup", emoji: "💄" },
    { id: "facial", name: "Facials", emoji: "🌸" },
    { id: "spa", name: "Spa & Massage", emoji: "🧖‍♀️" },
    { id: "nails", name: "Nail Art", emoji: "💅" },
  ];

  const galleryImages = [
    {
      id: 1,
      category: "hair",
      title: "Bridal Hair Styling",
      description: "Elegant updos for the special day",
      url: "https://images.unsplash.com/photo-1595867818082-083862f3aaf4",
    },
    {
      id: 2,
      category: "hair",
      title: "Vibrant Hair Coloring",
      description: "Trendy colors for a bold look",
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035",
    },
    {
      id: 3,
      category: "makeup",
      title: "Bridal Makeup",
      description: "Natural glam for wedding day",
      url: "https://images.unsplash.com/photo-1596466596120-2a8e4b5d1a51",
    },
    {
      id: 4,
      category: "makeup",
      title: "Evening Glam",
      description: "Perfect for special occasions",
      url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
    },
    {
      id: 5,
      category: "facial",
      title: "Luxury Facial Treatment",
      description: "Rejuvenating skincare experience",
      url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
    },
    {
      id: 6,
      category: "facial",
      title: "Gold Facial",
      description: "Premium anti-aging treatment",
      url: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    },
    {
      id: 7,
      category: "spa",
      title: "Aromatherapy Massage",
      description: "Relaxing essential oil massage",
      url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
    },
    {
      id: 8,
      category: "spa",
      title: "Hot Stone Therapy",
      description: "Deep muscle relaxation",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    },
    {
      id: 9,
      category: "nails",
      title: "Bridal Nail Art",
      description: "Elegant designs for the bride",
      url: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6",
    },
    {
      id: 10,
      category: "nails",
      title: "French Manicure",
      description: "Classic and timeless style",
      url: "https://images.unsplash.com/photo-1604654894610-df66bc4c40db",
    },
    {
      id: 11,
      category: "hair",
      title: "Balayage Highlights",
      description: "Natural-looking sun-kissed hair",
      url: "https://images.unsplash.com/photo-1559599076-9c0d0c6d5d5a",
    },
    {
      id: 12,
      category: "makeup",
      title: "Editorial Makeup",
      description: "Creative looks for photoshoots",
      url: "https://images.unsplash.com/photo-1622290291468-a28bb9e76bb5",
    },
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    let newIndex;
    if (direction === "next") {
      newIndex = (lightboxIndex + 1) % filteredImages.length;
    } else {
      newIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    setLightboxIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Animation variants
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
          Our <span className="text-pink-500">Gallery</span>
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
          Explore our work and get inspired for your next visit to Glamour Salon
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="flex items-center bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
            <Sparkles size={16} className="mr-2" />
            <span>Transformations</span>
          </div>
          <div className="flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
            <Heart size={16} className="mr-2" />
            <span>Client Showcase</span>
          </div>
          <div className="flex items-center bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
            <Scissors size={16} className="mr-2" />
            <span>Artistic Creations</span>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={fadeIn}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
              onClick={() => openLightbox(image, index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={`${image.url}?w=400&h=400&fit=crop`}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <p className="text-gray-200 text-sm">{image.description}</p>
                
                <div className="absolute top-4 right-4 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found in this category</p>
          </div>
        )}
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
            Ready for Your Transformation?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Book your appointment today and experience the Glamour Salon difference
          </p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Book Appointment
          </button>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl w-full max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-pink-400 z-10"
              >
                <X size={32} />
              </button>

              <div className="relative">
                <img
                  src={`${selectedImage.url}?w=1000&h=800&fit=crop`}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
                
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                  <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                  <p className="text-gray-200">{selectedImage.description}</p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox("prev");
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft size={32} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox("next");
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              <div className="text-white text-center mt-4">
                {lightboxIndex + 1} of {filteredImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
     </Layout>
  );
}