// ?html 요소(Element) 1개 검색/찾기 
let boxEl = document.querySelector('.box');

console.log(boxEl);

// ? html요소에 저굥할 수 있는 메소드
boxEl.addEventListener()

// ?인수(Arguments)를 추가 가능
boxEl.addEventListener(1,2);

//? 1. 이벤트 (Event, 상황)
boxEl.addEventListener('click', 2);

//? 2. 핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function(){
  console.log('Click~!');
})


const boxEl1 = document.querySelector('.box');

//? 요소의 클래스 정보 객체 활용!
boxEl1.classList.add('active');
let isContains = boxEl1.classList.contains('active');
console.log(isContains);

boxEl1.classList.remove('active');
let isContains = boxEl1.classList.contains('active');
console.log(isContains);