"use client";
import { Scissors, Sparkles, SprayCan, Brush } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Haircut & Styling",
    description: "Trendy haircuts tailored to your face shape and style.",
    price: "₹499",
    icon: <Scissors className="w-10 h-10 text-pink-500" />,
  },
  {
    id: 2,
    name: "Facial & Cleanup",
    description: "Rejuvenating facial treatments for glowing skin.",
    price: "₹799",
    icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
  },
  {
    id: 3,
    name: "Hair Coloring",
    description: "Premium coloring & highlights with top-quality products.",
    price: "₹1499",
    icon: <SprayCan className="w-10 h-10 text-blue-500" />,
  },
  {
    id: 4,
    name: "Makeup & Grooming",
    description: "Perfect makeup looks for weddings, parties & events.",
    price: "₹1999",
    icon: <Brush className="w-10 h-10 text-purple-500" />,
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Experience the best salon services designed to pamper you and enhance your style.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.name}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <p className="text-lg font-bold text-pink-600 mt-4">
                {service.price}
              </p>
              <button className="mt-4 w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
