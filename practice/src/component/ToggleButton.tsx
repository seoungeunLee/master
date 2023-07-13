import React from 'react';
import { useEffect, useState } from 'react';

const ToggleButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const ShowButtonClick = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', ShowButtonClick);

    return () => {
      window.removeEventListener('scroll', ShowButtonClick);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div>
          <button className="fixed left-[47%] top-[400px] block rounded-md bg-[royalblue] px-4 py-2 text-white">
            button
          </button>
        </div>
      )}
    </>
  );
};

export default ToggleButton;
