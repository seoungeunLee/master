//? 01. 화살표 함수 : 보다 간결하게 함수를 작성 할 수 있음
/*
  * let add = function(num1, num2){
  *   return num1 + num2;
  * }

  * let add = (num1, num2) => {
  *   return num1 + num2;
  * }
*/
//? return문이 한 줄 일 경우, 괄호 생략가능
let add = (num1, num2) => num1 + num2;

//? 인수가 각각 하나인 경우 괄호 생략 가능 
let sayHello = name => `Hello, ${name}`;

//! 인수가 하나도 없는 함수일 경우에는 괄호 생략 불가능

//! return문이 있다고 해도, return 전에 여러줄의 코드가 있을경우, 일반 괄호를 사용 할 수 없음
/*
  ex)
  let add = function(num1, num2){
  const result = num1 + num2;
  return result;
}

  => 이렇게 사용해야 함
  let add = (num1, num2) => {
  const result = num1 + num2;
  return result;
}
*/

/* 
  ! < 인수와 매개변수 >
  인수 (argument) : 값, 변수, 참조 등 함수가 호출 될 때 함수로 값을 전달해 주는 값
  매개변수 (parameter) : 전달받은 인수를 함수 내부로 전달하기 위해 사용하는 변수
  */


  showError();

  let showError = function(){
    console.log('error');
  }
  //함수 표현식으로 작성한 예시 : 오류코드 발생 - 사용 전 선언부터 해야함

  showError();

  function showError(){
    console.log("error");
  }
  //함수 선언문으로 작성 한 예시

  let showError = () => {
    console.log("error");
  }
  //화살표 함수로 표현한 예시

  //* 예제 - 화살표 함수로 만들기
  /*
  * const sayHello5 = function (name){
  *   const msg5 = `Hello, ${name}`;
  *   console.log(msg5);
  * }
  */
 const sayHello5 = (name) => {
  const msg5 = `Hello, ${name}`;
  console.log(msg5);
 }

 //* 예제2 - 인수가 2개이고, return문이 있는 예제
 /*
  * const add = function(num1, num2){
  *   const result = num1 + num2;
  *   return result;
  * }  

 */

 const add = (num1, num2) => {
  // const result = num1 + num2;
  // return result;
  //return문 한줄로 만들기
  return num1 + num2;
 }

 // return문이 한줄일때 더 간결하게 줄이기
 const add = (num1, num2) => num1 + num2;

  