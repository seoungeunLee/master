//! < 함수 선언문 > VS < 함수 표현식 > !
//* 함수선언문 : 지금까지 우리가 작성해 온 함수 작성 방식
//* 함수표현식 : 이름없는 함수를 만들고, 변수를 선언하여 함수를 할당
//* let sayHello = function(){
//* console.log('Hello');
//* }

// ! 사용 방식도, 실행하는 방식도 선언문, 표현식 모두 동일 : sayHello();
// ! 호출 할 수 있는 타이밍의 차이 


//? 01. 함수 선언문 : 어디서든 호출 가능
/*
  function sayHello(){
    console.log('Hello');
  }

  sayHello();
  *위의 코드를 순서를 변경하여 아래와 같이 작성해도 동작함
  sayHello();

  function sayHello(){
    console.log('Hello');
  }
  
  !자바스크립트는 위에서 순차적으로 한줄씩 읽으며 실행
  !이렇게 순차적으로 실행되고 즉시 결과를 반환하는 프로그래밍 언어 : 인터프리터 언어

  ? 자바스크립트 내부 알고리즘 : JS는 실행전 초기화 단계에서 코드의 모든 함수 선언문을 찾아서 생성해 둔다.
  ? => 눈에 보이는 것 보다 사용 가능 범위가 더 넓음. (실제로 코드가 올라간다는것은 아님)


  ! 함수 표현식 : 코드에 도달하면 생성 => 코드에 도달해야 생성되고 사용이 가능함

  !어떤 방식을 쓰건 상관은 없으나, 자유롭게 사용하고자 한다면 함수 선언식을 사용하는것이 좋음

*/
