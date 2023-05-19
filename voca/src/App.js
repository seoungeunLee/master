// import logo from './logo.svg';
// import './App.css';
// import Hello from './component/Hello';
// import State from './component/State';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// !리액트 6 버전 이상에서 Switch 삭제됨 

function App() {
  // const name = "Seoungeun";

  // const user = {
  //   name : 'Jane',
  // }

  // const naver = {
  //   name: "naver",
  //   url : "https://www.naver.com",
  // }
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Hello /> */}

      <Header />
      <Routes>
        <Route path='/' element={<DayList/>} />
        <Route path='/day' element={<Day />} />
      </Routes>
      {/* 
        Routes -> react-router-dom v6 업데이트 이전 Switch : url에 따라 각각 다른 페이지들을 보여줌 / Routes 외부는 모든 페이지에 공통으로 표시 됨
        기존에는 Switch 안에 Route , 그 안에 해당 path에 따라 보여질 컴포넌트가 존재
        v6 업데이트 이후 : Routes 안에는 Route만 존재 할 수 있고, path에 따라 로드 될 컴포넌트는 element속성으로 부여
      */}


      {/* <h1>props : properties</h1>
      <div className='flex flex-col gap-5'>
      <State age={10}/>
      <State age={20}/>
      <State age={30}/>
      </div> */}


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Start React Project form seoungeun
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      
      {/* <h1 style={{ color:'red', backgroundColor: 'mistyrose' }}>
        리액트의 시작, Hello,{name}
        </h1> */}
      {/* 
      
      이렇게 직접적으로 입력할때는 항상 객체형으로 적어줘야함 
      
      숫자나 문자열은 잘 나오지만 Boolean 타입이나 객체는 오류가 발생
      */}
      {/* <p>{user}</p>  오류가 발생*/}

      {/* <a href={naver.url}>
        {naver.name}
      </a> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
