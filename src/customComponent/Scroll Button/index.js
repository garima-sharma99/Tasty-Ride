import React, { useEffect, useState } from 'react'
import './scroll.css'

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

  return (
    <>
    <div className="scroll-to-top">
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-button">
                    <i className="fa-solid fa-circle-up"></i>
                </button>
            )}
        </div>
    </>
  )
}

export default Scroll