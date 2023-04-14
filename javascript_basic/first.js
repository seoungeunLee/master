
const name = prompt("이름을 입력하세요");
// alert("환영합니다, " + name +"님");
// alert(`안녕하세요 ${name} 입니다`);
// console.log(name); 

//!prompt : 입력 받는 창 -> ("상단 안내 문구","기본 값을 설정 하고싶을때 여기 기입")
//이름을 입력하지 않고 취소를 눌렀을때 === null 값이 들어옴


const isAdult = confirm("당신은 성인입닏까?");
console.log(isAdult);
// 확인과 취소버튼이 나옴 / 확인-true, 취소-false 값 반환  //사용자에게 확인을 받기위한 것.

//창이 떠잇는동안 스크립트가 일시정지됨
//스타일링의 불가능, 부라우저마다 기본 디자인이 다음

//!자료형
/*
  "문자열" + "문자열" ="문자열문자열"
  100 + 200 = 300 (같은 숫자형끼리 연산할 경우 숫자형으로 두출)
  
  그렇다면 다른 자료형으로 연산할 경우는? -> 의도치 않은 결과값을 반환 할 수 잇음
*/
const mathScore = prompt("수학몇점?");
const engScore = prompt("영어몇점?");
const result = (mathScore + engScore) / 2;
console.log(result);
/*
  prompt로 입력받은 값 = 문자열로 인식 
  근데 여기서 /2는 정상적으로 동작 => 나누기 같은 표현식은 자동으로 숫자형으로 변환후
  계산되는 특성이 있음

  "6" / "2" = 3  (자동 형 변환) 
  자동으로 변환 되니 좋은것이라고 생각 할 수 잇으나 추후에 원인을 찾기 힘든 에러를 
  발생 시킬수 있어 "명시적 형번환"을 해주는 것이 좋음
*/

//! 명시적 형변환
console.log(String(3), String(true), String(false), String(null), String(undefined));
/*
  결과값 : "3" "true" "false" "null" "undefined"
  모두 문자열로 변환되어서 출력 됨
*/

/* */

console.log( Number("1234"));
console.log( Number(true));
console.log( Number(false));

/*
  결과값 : 1234
  문자열 "1234"가 숫자혈 1234로 변환되어 출력 됨

  만약 문자열 안에 숫자가 아닌 문자로 함께 있을 경우 NaN이 출력되니 조심할 것.

  true와 false 값을 숫자형으로 바꿀 경우 1,0으로 변환됨
*/

// !Boolean으로 변환시 false가 뜨는경우
/*
  숫자 0, 빈 문자열, null, undefined, NaN
*/

//! Number(null) === 0 / Number(undefined) === NaN
/*
  !주의사항!
  !문자 "0" 이거나 비어있지 않은 공백일 경우 true를 반환 -> 버그없는 코드를 위해 기억할 것
  Number(0) === false
  Number('0') === true

  Number('') === false
  Number(' ') === true
  
*/



//!연산자
/*
  +(더하기)
  -(뺴기)
  *(곱하기)
  /(나누기)
  %(나머지)

  !%(나머지)를 유용하게 사용할 때가 많음
  *01. 2로 나눈 나머지의 값이 0인지 1인지에 따라 홀수,짝수를 구분할 수 있음
  홀수 : X % 2 = 1
  짝수 : Y % 2 = 0

  *02.어떤 값이 들어와도 5를 넘기면 안될경우
  X % 5 = 0 ~ 4 사이의 값만 반환함

  *거듭제곱을 하고싶을 경우 : ** (*을 두번 연속으로 붙여서 사용)

  !연산자의 우선순위
  나누기(/), 곱하기 (*) > 더하기 (+), 뺴기 (-)

*/

let num = 10;
// num = num + 5; // 15
num += 5; //위의 식과 완전히 동일하나 짧게 줄여쓴것
num *= 5; // num = num * 5; === 50
num -= 5; // num = num - 5; === 5
num %= 5; //num = num % 5 === 0 (%는 나머지)

console.log(num);


//!증가 연산자 , 감소 연산자!

let abc = 10;
let result1 = abc++; //증가 연산자 -> 결과값 10 (증가시키기 전의 값을 result1에 넣음)
// 11로 나오게 하려면 증가 연산자를 앞에 붙여줄것

let result2 = abc--; //감소연산자 -> 결과값 10 (감소 시키기 전의 값을 result2에 넣음)
// --abc; 로 적으면 9가 도출

console.log(result1);
/*

*/


//!비교연산자!
/*
  < 크다
  > 작다
  <= 크거나 같다 
  >= 작거나 같다 
  == 같다 (동등 연산자)
  != 다르다  //반환값은 항상 Boolean형으로 반환 - true, false
  === 타입까지 같다 (일치 연산자)

  =를 하나만 쓰는것은 할당할 때 사용
  !가급적이면 타입까지 비교 해 주는 일치 연산자를 사용하는것이 좋음
*/

const a = 1;
const b = "1";
console.log(a == b); //결과값으로 true가 반환
console.log(a === b); //false가 반환 -> 타입까지 비교해서 동등한지 판뱔하기 때문


//!조건문!
/* */
// *01. if문

const age = 30;

if(age > 19){ //!괄호 안의 조건은 항상 Boolean형으로 판단되어 true/false를 반환함
  console.log('환영합니다');
}
if(age <= 19){
  console.log('안녕히 가세요');
}
//-> "환영합니다"가 반환


//*02. else절

if(age > 19){ 
  console.log('환영합니다');
} else (age <= 19){
  console.log('안녕히 가세요');
}

// 추가 요구사항 : 정확히 19살이면 수능 잘 치세요 라는 뮨구를 보여주세요.

//*03 else if문
if(age > 19){ 
  console.log('환영합니다');
} else if(age === 19){
  console.log('수능 잘 치세요');
}
else (age <= 19){
  console.log('안녕히 가세요');
}





//!논리 연산자!
/* 
  || : or  === 여러개 중 하나라도 true 일 경우 true 반환 / 모든 값이 false일 때만 false 반환
  && : and === 모든 값이 true일 경우만 true / 하나라도 false면 false 반환
  ! : not === true일 경우 false 반환 / false일 경우 true 반환 (반대값 반환)

  !or은 첫번째 true를 발견하는 즉시 평기를 멈춘다.
  !and는 첫번째 false를 발견하는 즉시 평가를 멈춘다.
  위의 특성을 잘 이용하면 불필요한 연산을 줄여주기 때문에 성능 최적화 구현에 용이함
*/

//스티브 잡스는 한국인이거나 or 남자이다 === true
//스티브 잡스는 한국인이고 and 남자이다 === false

const name1 = "Mike";
const age1 = 30;

if(name1 === 'Tom' || age1 > 19){
  console.log("pass");
}
// 이름은 Tom이 아니지만 나이가 19 이상이기에 pass 

if(name1 === 'Tom' && age1 > 45){
  console.log("pass");
} else {
  console.log("RETURN")
}
// 이름이 Tom이지만 나이가 45보다 작기에 RETURN 반환


//* 예제 : 나이를 입력 받고 성인이 아닌경우 돌아가
const age2 = prompt('나이');
const isAdult1 = age > 19;

if(!isAdult1){
  console.log("돌아가");
}

/*
  !비교 연산자의 우선순위!
  
*/