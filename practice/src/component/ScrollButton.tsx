import React, { useState, useEffect } from 'react';

function ScrollButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout;

    const handleEvent = () => {
      setVisible(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setVisible(false);
      }, 3000);
    };

    const handleTouchStart = () => {
      handleEvent();
      clearTimeout(timeout);
    };

    const handleScroll = () => {
      handleEvent();
      clearTimeout(timeout);
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <button className={`scroll-button ${visible ? 'visible' : 'hidden'}`}>
      Scroll
    </button>
  );
}

export default ScrollButton;
