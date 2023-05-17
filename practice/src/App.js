// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import TestButton from './component/TestButton.tsx';
import ToggleButton from './component/ToggleButton.tsx';

function App() {
  const [hide, setHide] = useState(true);

  return (
    <div className="App flex flex-col items-center justify-center gap-2 py-10 h-[1500px]">
      <button onClick={()=> {setHide(!hide)}} className="bg-[#e0e0e0] px-4 py-2 rounded-md block">
        {hide ? "보이기" : "숨기기"}
      </button>

      {hide && <TestButton />}
    
        <ToggleButton />

    </div>
  );
}

export default App;
