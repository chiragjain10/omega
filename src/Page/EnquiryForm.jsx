import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../Componnet/Modal'  // <-- apna Modal component import karna na bhoolna

const EnquiryForm = () => {
  const [name, setName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [classes, setClasses] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 🔥 Modal control state
  const [modalDisplay, setModalDisplay] = useState("none");

  // Page reload hote hi Modal dikhe
  useEffect(() => {
    setModalDisplay("flex")
  }, [])

  const data = [
    {
      text1: "1 & 2 year classroom program",
      text2: "9th students",
      color: "bg-red-600",
      textColor: "text-white"
    },
    {
      text1: "1 year classroom program",
      text2: "10th students",
      color: "bg-blue-600",
      textColor: "text-white"
    },
    {
      text1: "1 & 2 year classroom program",
      text2: "11th students",
      color: "bg-blue-600",
      textColor: "text-white"
    },
    {
      text1: "1 year classroom program",
      text2: "12th students",
      color: "bg-red-600",
      textColor: "text-white"
    },
  ];

  const formData = {
    service_id: '',
    template_id: '',
    user_id: 's',
    template_params: {
      'from_name': name,
      'message': 'contact info ' + mobileNumber + ' course info ' + classes,
      'to_Name': "Omega Classes"
    }
  };

  const sendData = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', formData)
      console.log("DATA ==> ", res.data)
      // Reset form on success
      setName('');
      setMobileNumber('');
      setClasses('');
      alert('Enquiry submitted successfully!');
    } catch (error) {
      console.log("Error ==> ", error.message)
      alert('Error submitting enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const isFormValid = name.length > 1 && classes.length > 1 && mobileNumber.length === 10;

  return (
    <div className='bg-gradient-to-br from-gray-50 to-blue-50' id="enrollment1">
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12  ">

      {/* 🔥 Modal integrated here */}
      <Modal display={modalDisplay} setDisplay={setModalDisplay} />

      {/* Cards Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold poppins-bold mb-4 text-blue-700">
          Our <span className="text-red-600">Programs</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Choose from our comprehensive classroom programs designed for academic excellence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setModalDisplay("flex")}  // 🔥 Card click se modal open
            className={`${item.color} ${item.textColor} rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group`}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <span className="text-lg font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold poppins-bold mb-3 leading-tight">
                {item.text2}
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                {item.text1}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Enquiry Form Section */}
      <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Form Section */}
          <div className="p-8 sm:p-12">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold poppins-bold text-blue-700 mb-3">
                Start Your Success Journey
              </h2>
              <p className="text-gray-600 text-lg">
                Get in touch with us for more information about our programs
              </p>
            </div>

            <form onSubmit={sendData} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 poppins-medium">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base poppins-regular transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 poppins-medium">
                  Mobile Number *
                </label>
                <input
                  id="mobile"
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base poppins-regular transition-all duration-300"
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 poppins-medium">
                  Interested Course *
                </label>
                <select
                  id="course"
                  value={classes}
                  onChange={(e) => setClasses(e.target.value)}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base poppins-regular transition-all duration-300"
                  required
                >
                  <option value="">Select your class</option>
                  <option value="9th Grade Program">9th Grade Program</option>
                  <option value="10th Grade Program">10th Grade Program</option>
                  <option value="11th Grade Program">11th Grade Program</option>
                  <option value="12th Grade Program">12th Grade Program</option>
                  <option value="IIT JEE Coaching">IIT JEE Coaching</option>
                  <option value="NEET Coaching">NEET Coaching</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 px-6 rounded-xl text-lg font-bold poppins-bold text-white transition-all duration-300 transform ${
                  isFormValid && !isSubmitting
                    ? 'bg-red-600 hover:bg-red-700 hover:scale-105 shadow-lg cursor-pointer'
                    : 'bg-red-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Enquiry'
                )}
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="bg-gradient-to-br from-blue-600 to-red-600 p-8 sm:p-12 text-white flex items-center">
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold poppins-bold mb-4">
                Get Personalized Guidance
              </h3>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                Our academic counselors will contact you to understand your goals and provide the best guidance for your preparation journey.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Expert Career Counseling</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Detailed Program Information</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Scholarship Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EnquiryForm
