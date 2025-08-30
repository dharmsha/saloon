"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

export default function HomeSlider() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sliderImages"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSlides(data);
      } catch (error) {
        console.error("Error fetching slides:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSlides();
  }, []);

  // Custom arrows with better styling
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow z-30`}
        style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", right: "25px", width: "50px", height: "50px" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow z-30`}
        style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", left: "25px", width: "50px", height: "50px" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <style jsx global>{`
        /* Custom arrow styles */
        .custom-arrow {
          background: rgba(0, 0, 0, 0.4) !important;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .custom-arrow:hover {
          background: rgba(0, 0, 0, 0.7) !important;
          transform: scale(1.1);
        }
        
        .custom-arrow:before {
          display: none;
        }
        
        /* Dots customization */
        .slick-dots {
          bottom: 40px;
        }
        
        .slick-dots li {
          margin: 0 5px;
        }
        
        .slick-dots li button:before {
          color: white;
          font-size: 12px;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        
        .slick-dots li.slick-active button:before {
          color: #f59e0b;
          opacity: 1;
          font-size: 14px;
        }
        
        /* Slider animation enhancements */
        .slick-slide {
          transition: transform 0.8s ease, opacity 0.8s ease;
        }
        
        /* Fix for image cutting */
        .slick-list, .slick-track {
          height: 100%;
        }
      `}</style>

      {loading ? (
        // Loading state
        <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 text-lg">Loading slides...</p>
          </div>
        </div>
      ) : slides.length > 0 ? (
        // Slider with content
        <Slider {...settings}>
          {slides.map((item) => (
            <div key={item.id} className="relative w-full h-screen">
              {/* Background Image with overlay */}
              <div className="relative w-full h-full">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-20">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                    {item.title}
                  </h2>
                  <p className="text-2xl md:text-4xl font-semibold mb-8 text-amber-300 animate-fade-in-up delay-100">
                    ₹ {item.price}
                  </p>
                  <button
                    onClick={() => router.push("/book")}
                    className="px-8 py-4 bg-amber-500 text-white text-xl font-medium rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        // Fallback when no slides
        <div className="w-full h-full bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="bg-gradient-to-r from-blue-400 to-indigo-600 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No slides available</h3>
            <p className="text-gray-600">Please add slides from the admin panel</p>
          </div>
        </div>
      )}
    </div>
  );
}