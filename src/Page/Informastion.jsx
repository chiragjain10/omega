import React from 'react'
import Modal from '../Componnet/Modal'

const Informastion = () => {
  const [isLeftEnd, setIsLeftEnd] = React.useState(true);
  const [isRightEnd, setIsRightEnd] = React.useState(false);
  const containerRef = React.useRef(null);
  const [modalDisplay, setModalDisplay] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setIsLeftEnd(scrollLeft === 0);
        setIsRightEnd(scrollLeft + clientWidth + 50 >= scrollWidth);
      }
    };

    containerRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      containerRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const prevItem = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= window.innerWidth;
    }
  };

  const nextItem = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += window.innerWidth;
    }
  };

  return (
    <div id='result1' className='w-full px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-gray-50 to-blue-50'>
      {/* Modal */}
      <Modal display={modalDisplay} setDisplay={setModalDisplay} />

      {/* Heading */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl sm:text-4xl font-bold poppins-bold mb-4 text-blue-700'>
          Our Students <span className='text-red-600'>Results</span>
        </h2>
        <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
          Witness the outstanding achievements of our students in IIT JEE & NEET examinations
        </p>
      </div>

      {/* Videos Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-4xl mx-auto'>
        {/* Video 1 */}
        <div className='group cursor-pointer'>
          <div className='relative'>
            <video
              controls
              className='w-full h-64 sm:h-72 md:h-80 object-contain'
              src='/img/testimonials/t1.mp4'
            >
              {/* <source src='/img/testimonials/t1.mp4' type='video/mp4' /> */}
              Your browser does not support the video tag.
            </video>
            <div className='' />
          </div>
          <p className='text-center mt-4 text-gray-700 font-medium'>JEE Advanced Success Story</p>
        </div>

        {/* Video 2 */}
        <div className='group cursor-pointer'>
          <div className='relative'>
            <video
              controls
              className='w-full h-64 sm:h-72 md:h-80 object-cover '
              src='/img/testimonials/t2.mp4'
            />
          </div>
          <p className='text-center mt-4 text-gray-700 font-medium'>NEET Achiever Testimonial</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='text-center mb-8'>
        {/* <h2 className='text-3xl sm:text-4xl font-bold poppins-bold mb-4 text-blue-700'>
          Student <span className='text-red-600'>Testimonials</span>
        </h2>
        <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
          Hear what our students and parents have to say about their experience
        </p> */}
      </div>

      {/* Single Testimonial Image */}
      <div className="flex justify-center items-center w-full mb-12">
        <div className="flex-shrink-0 w-full sm:w-2/3 lg:w-1/2 snap-center">
          <div className="relative group cursor-pointer">
            <img
              src="/img/testimonials/t3.jpeg"
              alt="Student Testimonial"
              className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
              <p className="text-white text-lg font-medium">Rank Holder Celebration</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='text-center mt-12 bg-gradient-to-r from-red-50 to-red-50 rounded-2xl p-8 max-w-4xl mx-auto'>
        <h3 className='text-2xl sm:text-3xl font-bold mb-4 text-blue-700'>
          Ready to Start Your Success Journey?
        </h3>
        <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
          Join thousands of successful students who have achieved their dreams with Omega Classes
        </p>
        <button
          className='bg-red-600 hover:from-red-700 hover:to-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'
          onClick={() => setModalDisplay(true)}
        >
          Enroll Now
        </button>
      </div>
    </div>
  )
}

export default Informastion
