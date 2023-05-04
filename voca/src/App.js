// import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';

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
    <div className="App">
      <Hello />

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
  );
}

export default App;
