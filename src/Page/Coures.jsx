// Courses.jsx
import React, { useState, useEffect }   from "react";
import { BookOpen, GraduationCap, Brain, Layers } from "lucide-react";
import Modal from "../Componnet/Modal";

const courses = [
  { name: "1st to 12th Coaching Classes", icon: GraduationCap },
  { name: "CAT", icon: BookOpen },
  { name: "CMAT", icon: BookOpen },
  { name: "BANKING", icon: Layers },
  { name: "IPMAT", icon: BookOpen },
  { name: "SSC", icon: Layers },
  { name: "MPPSC", icon: Layers },
  { name: "IIT NEET", icon: GraduationCap },
  { name: "NIMCET", icon: BookOpen },
  { name: "ABACUS", icon: Brain },
  { name: "VEDIC MATHS", icon: Brain },
  { name: "MID BRAIN ACTIVATION PROGRAM", icon: Brain },
];

const Courses = () => {
    const [modalDisplay, setModalDisplay] = useState("none");

      useEffect(() => {
        setModalDisplay("flex")
      }, [])

  return (
    <section
      id="courses1"
      className="w-full py-20 bg-gradient-to-br from-blue-50 to-white"
    >
        <Modal modalDisplay={modalDisplay} setModalDisplay={setModalDisplay} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-700 mb-2 poppins-bold">
            Our Courses
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Explore a wide range of courses designed to shape your future
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div
                key={index}
                onClick={() => setModalDisplay("flex")} 
                className="relative group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 p-8 text-center transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-to-tr from-blue-500 to-red-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 poppins-medium group-hover:text-blue-700 transition-colors">
                  {course.name}
                </h3>

                {/* Decorative glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-red-100 to-blue-100 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
