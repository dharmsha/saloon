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
  const router = useRouter();

  useEffect(() => {
    const fetchSlides = async () => {
      const querySnapshot = await getDocs(collection(db, "sliderImages"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSlides(data);
    };
    fetchSlides();
  }, []);

  // Custom arrows
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow`}
        style={{ ...style, display: "block", right: "15px", zIndex: 2 }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow`}
        style={{ ...style, display: "block", left: "15px", zIndex: 2 }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full h-screen">
      <style jsx global>{`
        .custom-arrow:before {
          font-size: 40px;
          color: white;
          text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        }
        .slick-dots {
          bottom: 30px;
        }
        .slick-dots li button:before {
          color: white;
          font-size: 12px;
          opacity: 0.6;
        }
        .slick-dots li.slick-active button:before {
          color: #fbbf24;
          opacity: 1;
        }
      `}</style>

      <Slider {...settings}>
        {slides.map((item) => (
          <div key={item.id} className="relative w-full h-screen">
            {/* Background Image */}
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-screen object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {item.title}
              </h2>
              <p className="text-2xl md:text-3xl font-semibold mb-6 drop-shadow-lg">
                ₹ {item.price}
              </p>
              <button
                onClick={() => router.push("/book")}
                className="px-8 py-3 bg-amber-500 text-white text-lg md:text-xl font-medium rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Fallback when no slides */}
      {slides.length === 0 && (
        <div className="w-full h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse bg-gradient-to-r from-blue-400 to-indigo-600 h-12 w-12 rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">No slides available</p>
            <p className="text-gray-500">Network error</p>
          </div>
        </div>
      )}
    </div>
  );
}
