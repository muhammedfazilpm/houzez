import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const videoRefs = useRef([]);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1440,
        settings: { slidesToShow: 3 },
      },
    ],
    beforeChange: (oldIndex, newIndex) => handleVideoPosition(newIndex),
  };

  const items = [
    {
      title: "Redefining Luxury Living",
      subtitle: "Explore our exquisite villas that blend modern elegance with timeless charm.",
      buttonText: "Discover your Dream Home",
      route: "/properties",
    },
    {
      title: "A Legacy of Trust",
      subtitle: "Building homes for a decade with precision, passion, and commitment to quality.",
      buttonText: "Learn About Us",
      route: "/about",
    },
    {
      title: "Experience the Future of Living",
      subtitle: "Ongoing projects that offer innovative designs and unparalleled comfort.",
      buttonText: "View Our Projects",
      route: "/properties",
    },
  ];

  const handleVideoPosition = (index) => {
    const video = videoRefs.current[index];
    if (video && video.readyState >= 1) {
      // Starting position based on slide index
      const startPosition = (video.duration / items.length) * index;
      video.currentTime = startPosition;
    }
  };

  const onLoadedMetadata = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      handleVideoPosition(index);
    }
  };

  return (
    <div style={{ background: "white" }} className="carousel-container">
      <div style={{ background: "white" }} className="container mx-auto">
        <div style={{ background: "white" }} className="overflow-hidden">
          <Slider style={{ background: "white" }} {...settings}>
            {items.map((item, index) => (
              <div
                key={index}
                className="carousel-card relative text-center px-2"
                style={{ height: "200px", margin: "0 10px", background: "white" }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  style={{ filter: 'brightness(70%)', minHeight: "200px", background: "white" }}
                  className="w-full object-cover h-full"
                  src="/demo1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedMetadata={() => onLoadedMetadata(index)}
                />
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
                  style={{ background: 'rgba(0,0,0,0.4)' }}
                >
                  {/* <h2 className="text-xl md:text-2xl font-bold mb-2 shadow-md">{item.title}</h2> */}
                  {/* <p className="text-sm md:text-lg mb-4 shadow-md">{item.subtitle}</p> */}
                  {/* <button
                    onClick={() => navigate(item.route)}
                    className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-400 transition-all"
                  >
                    {item.buttonText}
                  </button> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
