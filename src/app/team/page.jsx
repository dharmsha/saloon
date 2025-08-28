"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Layout from '@/components/Layout/Layout';
export default function OurTeam() {
  const teamMembers = [
    {
      name: "Riya Sharma",
      role: "Hair Stylist",
      image: "/team1.jpg",
    },
    {
      name: "Arjun Verma",
      role: "Makeup Artist",
      image: "/team2.jpg",
    },
    {
      name: "Sneha Patel",
      role: "Nail Specialist",
      image: "/team3.jpg",
    },
    {
      name: "Rahul Mehta",
      role: "Massage Expert",
      image: "/team4.jpg",
    },
  ];

  return (
    <Layout>
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Team</h2>
          <p className="mt-4 text-gray-600">
            Meet our talented professionals who make you look and feel your best.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-4 text-gray-500">
                  <a href="#" className="hover:text-pink-500">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="hover:text-pink-500">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="hover:text-pink-500">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="hover:text-pink-500">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
    </Layout>
  );
}
