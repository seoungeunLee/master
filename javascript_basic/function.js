//!함수 (function!
/*
  서비스를 만들다보면, 같거나 비슷한 동작들이 생기기 마련
  ex. 팝업, 결제 등등

  이러한 동작들을 반복적으로 사용하거나,
  여러곳에서 사용한다면 하나로 만들어서 재사용하는것이 효율적
  ( 중복되는 코드를 줄이고, 유지보수도 편리)

  함수는 이것을 가능하게 해 줌

  우리는 이 전까지 브라우저 내장 함수를 모두 사용하고 있엇음
  ex. consol, alert, confirm 등등

*/

//함수의 기본형
/*
  function sayHello(name{
    console.log(`Hello, ${name}`);
  })

  함수 함수명(매개변수){ 
    매개변소눈 없을수도 있고, 하나일수도, 2개 이상일수도 있다  
  }

  이 함수는 함수명('매개변수명'); 의 형식으로 통해 호출이 가능함

*/


//01. 매개변수가 없는 함수 작성
  function showError(){
    alert('에러가 발생 했습니다. 다시 시도해 주세요');
  }

  showError();



  //02. 매개변수가 있는 함수
  function sayHello(name){
    const msg = `Hello, ${name}`;
    //만약 회원가입을 하지 않아 이름을 모르는경우 안내 메시지 추가 
    /* 
    let msg = `Hello`;
    에러 메시지가 변경 될 수 있기때문에 let으로 수정

    if(name){
      msg = `Hello, ${name};`
    }

    console.log(msg);

    매개 변수 없이 호출 시 Hello만 정상적으로 출력되는것을 확인 할 수 있음
     */



    

    /*
    console.log(name);
    로그를 찍어 확인 해 본 결과 name === undefined로 출력됨

    let msg = `Hello`;
    if(name){
      msg = `Hello, ${name};`
    }
    if(조건문이 undefined === false) 일 경우 
    반복문 진입에 실패하기 떄문에 

    console.log(msg);
    그 다음 코드가 실행되고 따라서 Hello가 찍힘
    */

    console.log(msg);
  }

  sayHello('Mike');

  // 매개변수만 변경하여 동일한 메시지 띄우가 가능 (중복코드 줄이고, 유지보수 용이)
  sayHello('jane');
  sayHello('hyun woong');


