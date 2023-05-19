import React, { useState, useEffect } from 'react';

function ToggleComponent() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleTouch = () => {
      setVisible(!visible);
    };

    document.addEventListener('touchstart', handleTouch);

    return () => {
      document.removeEventListener('touchstart', handleTouch);
    };
  }, [visible]);

  return (
    <div>
      {visible && <h1>Toggle Me</h1>}
    </div>
  );
}

export default ToggleComponent;



// import React, { useState, useEffect } from 'react';

// function ScrollButton() {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     let timeout;
//     const handleScroll = () => {
//       setVisible(true);
//       clearTimeout(timeout);
//       timeout = setTimeout(() => {
//         setVisible(false);
//       }, 3000);
//     };
//     const handleTouchStart = () => {
//       setVisible(true);
//       clearTimeout(timeout);
//     };
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('touchstart', handleTouchStart);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('touchstart', handleTouchStart);
//       clearTimeout(timeout);
//     };
//   }, []);

//   return <button className={visible ? 'visible' : 'hidden'}>Scroll</button>;
// }

// export default ScrollButton;
