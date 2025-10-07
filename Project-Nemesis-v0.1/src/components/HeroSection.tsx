'use client';

import React, { useState, useEffect } from 'react';

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

/**
 * Hero Section Component with Image Carousel
 * Displays a rotating carousel of hero images with automatic and manual navigation
 */
const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel slides data
const slides: CarouselSlide[] = [
    {
        id: 1,
        title: 'Justice Through Technology',
        description: 'Modernizing judicial management for a better tomorrow',
        imageUrl: '../public/Images/Hero Slider/Slider_Placeholder 1.png',
    },
    {
        id: 2,
        title: 'Efficient Case Management',
        description: 'Streamlining court processes with intelligent systems',
        imageUrl: '/Images/Hero Slider/Slider_Placeholder 2.png',
    },
    {
        id: 3,
        title: 'Transparent & Accessible',
        description: 'Empowering citizens with accessible judicial information',
        imageUrl: '/Images/Hero Slider/Slider_Placeholder 3.png',
    },
];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
                {slide.description}
              </p>
              <button className="bg-judicial-gold text-judicial-navy px-8 py-3 rounded-md font-semibold text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-judicial-gold"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-judicial-gold"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-judicial-gold w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
