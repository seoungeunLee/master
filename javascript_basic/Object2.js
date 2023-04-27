//? method : 객체 프로퍼티로 할당 된 함수
const superman = {
  name : 'clark',
  age : 33,
  fly : function(){
    console.log('날아갑니다');
  }
  /*
  fly(){
    console.log('날아갑니다');
  }
  로 축약해서 적을 수 있다 (function 키워드 생략)
  */
}
superman.fly(); // 날아갑니다


//? 객체와 메서드의 관계 : 
const user = {
  name : 'Jane',
  sayHello : function(){
    //! console.log(`Hello, I'm ${user.name}`);
    //method에 user의 name 프로퍼티를 넣고싶을때는 상단과 같이 쓸수 있지만
    //문제가 발생 할 수 있기 때문에 하단과 같이 this를 사용해야 한다.
    
    console.log(`Hello, I'm ${this.name}`);
    //! user.sayHello();를 호출하면 
    //! .앞의 user가 sayHello method의 this가 된다
  }
}

let boy = {
  name : 'Mike',
  sayHelloTest, // 함수를 각 객체의 메서드로 넣어줌
}

let girl = {
  name : 'Jane',
  sayHelloTest, // 함수를 각 객체의 메서드로 넣어줌
}

sayHelloTest : function(){
  console.log(`Hello, I'm ${this.name}`);
  // 여기서 this는 아직 결정 되지 않았음 -> 어떻게 호출하느냐에 따라 달라짐
}

// this는 실행하는 시점 (런타임)에 결정됨
boy.sayHelloTest(); // 여기서 this는 .앞의 boy 객체를 의미
// I'm Mike
girl.sayHelloTest(); // 여기서 this는 .앞의 girl 객체를 의미
// I'm Jane


/* 
  ! sayHelloTest 함수를 화살표 함수로 선언했을경우 위와는 상당히 다른 결과를 도출
  ? 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않는다.
  ? 화살표 내부에서 this를 사용 할 경우, 그 this는 외부에서 값을 가져온다.
*/

let boy1 = {
  name : 'Mike',
  sayHelloTest : () => {
    console.log(this);
  }
}

boy1.sayHelloTest(); // 여기서 this != boy
// 여기서 this를 사용하게 되면 그 this는 전역 객체를 가리키게 됨
//? 브라우저 환경에서의 전역 객체 : window
//? Node.js 환경에서의 전역 객체 : global


let boy2 = {
  name: 'Mikee',
  showName : function () {
    console.log(boy2.name); //boy2의 이름 ('Mikee') 을 보여줌
  }
}

// boy2.showName();
let man = boy2;  //man을 선언한 후 boy2를 할당하여 mat으로도 boy2의 객체로 접근 할 수 있게 만듦
// 사람은 mikee 하나인데 별명이 boy2와 man 두개인 것

man.name = 'Tom';
console.log (boy2.name); // 'Tom' 출력

// man.showName(); //Mikee 출력
boy2 = null; // boy2의 name도, showName()도 없어져서 동작 할 수 없음
/*
  console.log(boy2.name) 이 부분을 하단처럼 This로 바꿔주면 됌
  ! console.log(this.name) 으로 바꿔주면 정상적으로 객체의 name 프로퍼티 생성
*/

man.showName(); // 'name'이 없다는 에러가 발생