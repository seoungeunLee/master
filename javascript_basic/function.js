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
    //!여기서 msg는 함수 밖에서는 사용 할 수 없음(지역변수)
    //!msg를 전역변수로 사용하고자 하는경우 함수 밖으로 빼줘야 함
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
      (msg += ', ' + name; 이렇게도 적어줄 수 있음) 
      (또는, msg += `, ${name}`; 로도 표현 가능)
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


 



  //!전역변수와 지역변수
  let msg2 = 'Welcome'; //전역변수
  console.log(msg2); // Welcome 출력

  function sayHello2(name){
    let msg2 = 'Hello'; //지역변수
    console.log(msg2 + ' ' + name);
    // Hello Mike 출력

    /* 전역 변수와 동일한 이름으로 선언 할 수 있고, 서로 간섭을 받지 않음 */
  }

  sayHello2('Mike');
  console.log(msg2); // Welcome 출력



let name = 'Mike';

function sayHello3(name){
  console.log(name);
}

sayHello3(); //undefined
sayHello3('Jane'); //"Jane"

/* 
  !매개변수로 받은 값은 복사 된 후 함수의 지역 변수가 됨!
  !전체 서비스에서 공통으로 바라보아야 할 변수를 제외하고는 
  !지역 변수를 사용하는 습관을 들이는 것이 좋음
  !=> 전역 변수가 많아질 경우 관리가 힘들어 지기 때문
*/




function sayHello4(name){
  // let msg4 = "Hello";
  // if(name){
  //   msg4 + `Hello, ${name}`
  // }

  //! OR
  // let newName = name || 'friend';
  // let msg4 = `Hello, ${newName}`;
  // console.log(msg4);
}

sayHello4(); //"Hello, friend"
sayHello4('Jane'); //"Hello, Jane"



//!매개변수의 기본값 
function sayHello4(name = 'friend'){
  // 매개변수의 defult값은 매개변수가 없을때만 할당됨

  let msg4 = `Hello, ${name}`;
  console.log(msg4);
}

sayHello4(); 
sayHello4('Jane');




//! return으로 값 반환
function add(num1, num2){
  return num1 + num2;
  //return으로 적어주면 return 오른쪽의 값을 반환해줌
}

const result = add(2,3); //숫자 2개가 더해진 값이 변수 result에 할당
console.log(result);



function showError(){
  alert("에러가 발생했습니다.");
  //! return문이 없는 함수도 항상 undefined를 반환함

  return; //!혹은 return만 적어주어도 항상 undefined를 반환함

  //!return문이 있으면 함수의 오른쪽에 있는 값을 반환하고 즉시 종료 -> 함수를 끝내는 목적으로도 사용
  alert('이 코드는 절대 실행되지 않습니다.');

}

const resultError = showError();
console.log(resultError);
//alert을 띄운 후 undefined를 반환함


/*
  ! < 함수 > !
  01. 함수는 한번에 한작업만 하는것이 좋음
  02. 변수와 마찬가지로 읽기 쉽고, 어떤 동작인지 알 수 있게 네이밍 할 것.
    ?- showError : 에러를 보여줌
    ?- getName : 이름을 얻어옴
    ?- createUserData : 유저데이터 생성
    ?- checkLogin : 로그인 여부 체크
*/