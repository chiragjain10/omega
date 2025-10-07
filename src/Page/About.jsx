// About.jsx
import React, { useState } from "react";
import Modal from "../Componnet/Modal";

const About = (props) => {
  const [modalDisplay, setModalDisplay] = useState("none");

  return (
    <div id="benifits1" className="w-full py-16 bg-gradient-to-br from-gray-50 to-blue-50">
       <Modal display={modalDisplay} setDisplay={setModalDisplay} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="text-center mb-8 lg:hidden">
              <h2 className="text-4xl sm:text-5xl font-bold poppins-bold text-blue-700 mb-3">
                Welcome to <span className="text-red-600">Omega</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
              <img
                src="/img/team/7.jpeg"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                alt="Omega Classes Campus"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-red-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>

            {/* Stats Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-blue-100">
              <div className="text-center">
                <div className="text-2xl font-bold poppins-bold text-blue-700">15+</div>
                <div className="text-sm poppins-medium text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="text-left hidden lg:block">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold poppins-bold text-blue-700 mb-4 leading-tight">
                Welcome to <span className="text-red-600">Omega</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mb-6"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-700 poppins-regular leading-relaxed">
                Welcome to <span className="font-semibold text-blue-700">OMEGA CLASSES</span> -
                providing quality education to students preparing for Engineering (JEE) and
                Medical (NEET/AIIMS) entrances with intense preparation of their school and
                board exams.
              </p>

              <p className="text-lg sm:text-xl text-gray-700 poppins-regular leading-relaxed">
                Our esteemed institution is committed to selfless effort in shaping the career
                of young and budding minds, helping them achieve the cherished goals of their life.
              </p>

              <p className="text-lg sm:text-xl text-gray-700 poppins-regular leading-relaxed">
                OMEGA is a Premier Organization preparing students for IIT JEE/NEET and other
                prestigious engineering/medical entrance exams. We are blessed with an unmatched
                record of producing the highest success ratio of selections year after year for
                both Long Term Classroom Programs and Concept Strengthening Classroom Programs.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 poppins-medium">IIT JEE Preparation</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 poppins-medium">NEET/AIIMS Coaching</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 poppins-medium">Board Exam Preparation</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 poppins-medium">Proven Track Record</span>
              </div>
            </div>

            

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={() => props.setDisplay(true)}
                className="group bg-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold poppins-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Know More About Us</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
