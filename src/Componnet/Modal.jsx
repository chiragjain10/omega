import React from 'react';

const Modal = ({ display, setDisplay }) => {
  const [name, setName] = React.useState('');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [classes, setClasses] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const hasSubmitted = React.useRef(false); // ✅ track karne ke liye

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasSubmitted.current) return; // prevent double submit
    hasSubmitted.current = true;

    setIsLoading(true);

    const whatsappNumber = "919755598877"; // India code +91
    const message = `Hello Omega Classes,%0A
Name: ${name}%0A
Mobile: ${mobileNumber}%0A
Interested in: ${classes}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    // Open WhatsApp link
    window.open(whatsappURL, "_blank");

    // Reset after small delay for UX
    setTimeout(() => {
      setIsLoading(false);
      setDisplay(false); // ✅ only once
      hasSubmitted.current = false; // reset for next open
    }, 500);
  };

  const isFormValid =
    name?.length > 1 && classes?.length > 1 && mobileNumber?.length === 10;

  if (!display) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative mx-4 transform animate-slideUp">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Boost Your NEET/JEE Preparation
            </h2>
            <p className="text-sm text-blue-600 font-semibold mt-1">
              With Omega Classes
            </p>
          </div>
          <button
            onClick={() => setDisplay(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 transition-all duration-200 cursor-pointer group"
            aria-label="Close modal"
          >
            <span className="text-lg font-bold transition-transform group-hover:scale-110 cursor-pointer">
              ×
            </span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Mobile Number Input */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              value={mobileNumber}
              onChange={(e) =>
                setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))
              }
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter 10-digit mobile number"
              maxLength={10}
              required
            />
          </div>

          {/* Classes Input */}
          <div>
            <label htmlFor="classes" className="block text-sm font-medium text-gray-700 mb-1">
              Class / Courses <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="classes"
              value={classes}
              onChange={(e) => setClasses(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="e.g., 11th Science, 12th PCMB, NEET 2024"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setDisplay(false)}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:from-green-700 hover:to-green-800 disabled:opacity-50 transition-all"
            >
              {isLoading ? "Sending..." : "Send on WhatsApp"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
