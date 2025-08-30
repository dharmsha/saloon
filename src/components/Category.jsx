"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase"; 
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("all"); // service/feature/offer
  const [selectedGender, setSelectedGender] = useState("all"); // male/female/unisex
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
        setFilteredCategories(data); // initially all
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // ✅ Filter handler
  useEffect(() => {
    let filtered = categories;

    if (selectedType !== "all") {
      filtered = filtered.filter((cat) => cat.type === selectedType);
    }
    if (selectedGender !== "all") {
      filtered = filtered.filter(
        (cat) => cat.gender === selectedGender || cat.gender === "unisex"
      );
    }

    setFilteredCategories(filtered);
  }, [selectedType, selectedGender, categories]);

  const handleBookNow = (cat) => {
    router.push(`/book?category=${cat.id}`); 
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Premium Services</h1>
          <p className="text-gray-600 mb-8">
            Indulge in our luxurious beauty treatments tailored just for you
          </p>
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

      {/* Filters */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-wrap gap-4 justify-center">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-pink-300"
        >
          <option value="all">All Types</option>
          <option value="service">Service</option>
          <option value="feature">Feature</option>
          <option value="offer">Offer</option>
        </select>

        <select
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
          className="border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-pink-300"
        >
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
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
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">{cat.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-pink-600 font-bold text-lg">₹ {cat.price}</div>
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
    </div>
  );
}
