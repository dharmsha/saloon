"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase"; 
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categories"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleBookNow = (cat) => {
    router.push(`/book?category=${cat.id}`); 
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Indulge in our luxurious beauty treatments tailored just for you
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center animate-pulse">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our <span className="text-pink-500">Premium</span> Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Indulge in our luxurious beauty treatments tailored just for you. 
          Our expert stylists are ready to make you look and feel fabulous.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                    <span className="text-5xl">💇</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
                  {cat.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-pink-600 font-bold text-lg">₹ {cat.price}</div>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="text-gray-500 text-sm ml-1">(42)</span>
                  </div>
                </div>

                <button
                  onClick={() => handleBookNow(cat)}
                  className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto mt-16 text-center bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready for a Transformation?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Book your appointment today and experience the luxury our salon has to offer. 
          Our team of experts is waiting to give you the perfect look.
        </p>
        <button className="bg-gray-800 text-white py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors duration-300 font-medium">
          Contact Us
        </button>
      </div>
    </div>
  );
}