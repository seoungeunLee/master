import React from "react";
import { useEffect, useState } from "react";


const ToggleButton = () => {
  const [showButton, setShowButton] = useState(false);
  

  useEffect(()=> {
    const ShowButtonClick = () => {
      if(window.scrollY > 400){
        setShowButton(true)
      }else{
        setShowButton(false)
      }
    }

    window.addEventListener("scroll" , ShowButtonClick)
    
    return ()=> {
      window.removeEventListener("scroll", ShowButtonClick)
    }
  }, [])

  return (
    <>
    {showButton && 
      <div>
        <button className="bg-[royalblue] text-white px-4 py-2 rounded-md block fixed top-[400px] left-[47%]">button</button>
      </div>
      }
    </>
  )
}

export default ToggleButton;