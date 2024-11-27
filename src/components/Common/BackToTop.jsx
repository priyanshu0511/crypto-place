import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed flex justify-center items-center w-12 h-12 rounded-full bottom-6 right-6 z-50 bg-blue hover:bg-darkblue text-white shadow-lg transition-all duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default BackToTop;
