import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();  퍼포먼스 관련된 함수 
 /*
  ! reportWebVitals()dp console.log를 넣어주면 개발창을 통해 
  ! 앱의 퍼포먼스 시간들을 분석하여 object의 형태로 보여줌

  cra는 웹 퍼포먼스 측정 도구로 web-vitals라는 라이브러리를 사용 - google에서 사이트 경험, 측정, 개선용
  -> 사이트 성능 측정 엔드포인트 분석 결과를 실제 사용하는 사이트에 보낼수 있음
    (google Analytics가 있다면 id 값을 만들어 더욱 쉽게 설정 가능)
 */


