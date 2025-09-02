"use client";

import { useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import ProtectedRoute from "@/components/ProtectedRoute";
import Layout from "@/components/Layout/Layout";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    service: "",
    date: "",
    time: "",
    location: "", // 🔹 new field
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const services = [
    "Haircut",
    "Hair Color",
    "Facial & Skincare",
    "Makeup",
    "Spa & Massage",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Auto-detect location
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setFormData({
            ...formData,
            location: `Lat: ${latitude}, Lng: ${longitude}`,
          });
        },
        (err) => {
          alert("Location access denied. Please enter manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "appointments"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      setSuccess(true);
      setFormData({
        name: "",
        mobile: "",
        service: "",
        date: "",
        time: "",
        location: "",
      });
    } catch (err) {
      console.error("Error saving appointment:", err);
      alert("Something went wrong, please try again!");
    }

    setLoading(false);
  };

  return (
    <ProtectedRoute>
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-pink-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-pink-600 mb-6 text-center">
              Book Your Appointment
            </h1>

            {success && (
              <p className="text-green-600 mb-4 text-center">
                ✅ Appointment booked successfully!
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
              />

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
              >
                <option value="">Select Service</option>
                {services.map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
              />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
              />

              {/* 🔹 Location Field */}
              <div className="flex gap-2">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
                />
                <button
                  type="button"
                  onClick={handleGetLocation}
                  className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  📍
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
              >
                {loading ? "Booking..." : "Book Appointment"}
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
