/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react"
import Modal from '../Componnet/Modal'


 const Herobanner = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
    const [modalDisplay, setModalDisplay] = useState("none");
  
    useEffect(() => {
      setModalDisplay("flex")
    }, [])


  const slides = [
    {
      image: "omegaImages/c1.jpeg",
      title: "Welcome to",
      highlighted: "Omega Classes",
      subtitle: "Premier coaching for IIT JEE & NEET preparation",
      buttonText: "Learn More"
    },
    {
      image: "omegaImages/c2.jpeg",
      title: "Excellence in",
      highlighted: "Education",
      subtitle: "Highly qualified faculties with unmatched track record",
      buttonText: "Learn More"
    },
    {
      image: "omegaImages/c3.jpeg",
      title: "Your",
      highlighted: "Success",
      subtitle: "Join thousands of successful students who achieved their dreams",
      buttonText: "Start Your Journey"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Slides Container */}
      <Modal display={modalDisplay} setDisplay={setModalDisplay} />
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
            <img 
              src={slide.image} 
              className="w-full h-full object-cover"
              alt={slide.title}
            />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center z-20 px-4 sm:px-8 lg:px-16 xl:px-24">
              <div className="text-white max-w-2xl space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
                  {slide.title} <span className="text-red-500">{slide.highlighted}</span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 opacity-95 leading-relaxed">
                  {slide.subtitle}
                </p>
               
                <button 
                  onClick={() => props.setDisplay(true)}
                  onClick={() => setModalDisplay("flex")} 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-red-500 transition-all duration-1000 ease-linear"
          style={{
            width: `${(currentSlide + 1) * (100 / slides.length)}%`
          }}
        />
      </div>
    </div>
  );
};  

export default Herobanner;
