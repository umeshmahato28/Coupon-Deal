import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-32 left-1/2 transform -translate-x-1/2 z-50">
      {isVisible && (
        <button className="btn btn-circle bg-opacity-50 text-white py-2 px-4  hover:bg-accent focus:outline-none" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
        
      )}
    </div>
  );
};

export default ScrollToTop;