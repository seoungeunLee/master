// 반복문
//01.for

for(let i=0; i<10; i++){ //(초기값; 조건문; 코드가 실행 후 작업) / 여기서 조건문은 false가 되면 멈춤
  //반복할 코드
  // console.log(i+1);
}
/* 
  초기값 세팅 후 , 반복할 코드가 들어있는 반복문 실행 (조건문이 true일 경우), 실행 후 i++ 처리(증가)
 */


  //02.while 
  let a = 0;
  while(a<10){ // (조건문)
    //코드
    a++;
  }
  /*
    위와같이 적을경우 무한적으로 실행되어 브라우저가 뻗어버릴수 있어 a++ 추가
  */


    //03.do while
    let b = 0;
    do{
      //코드
      b++;
    }while(b<10)

    //b가 조건에 부합 할 경우 do 안의 조건문을 실행
    //일단 실행하고 조건에 부합한지 확인하기때문에 무조건 1번은 실행한다는 특징이 있음


    //반복문의 탈출 : break, continue
    //01. break : 즉시 반복문을 멈추고 빠져나옴
    //02. continue : 멈추고 다음 반복문을 실행
  while(true){
    let answer = confirm('계속 할까요?');
    if(!answer){
      break;
    }
  }
  /*
  !여기서 while(true)는 영원히 반복되니 주의할 것.!

  계속 반복할까요? 에대한 답으로 Y일 경우 계속 반복을,
  N 일 경우 멈춤

  while 반복문은 특정 조건이 되었을때 (break)멈추도록 지정해 주는 것이 매우 중요함
  */

  //*continue 를 이용하여 짝수만 짚어보자
  for(let i = 0; i<10; i++){
    if(i%2){ //i를 나눈 나머지가 1일 경우 if문의 continue를 실행하여 다시 For문 동작
      continue;
    }
    console.log(i); // i를 나눈 나머지가 0일 경우 console을 찍음
  }
  // 결론적으로 0,2,4,6,8 을 순서대로 찍고 반복문 종료

//!명확한 횟수가 정해져 있을 경우 For문을 , 그게 아니라면 While문을 사용하는것이 좋음


//03.switch
if(평가 === A){
  //A일때 코드
}else if(평가 === B){
  //B일때 코드
}

// 위의 코드를 switch문으로 작성했을경우는 다음과 같다

switch(평가){
  case A:
    // A 일때 코드
  case B:
    // B일때 코드

    //이때 Break문을 만나면 반복문을 빠져나감
}

/*
  사과: 100원, 바나나 : 200원, 키위: 300원, 멜론:500원,
  수박: 500원

  사고싶은 과일을 물어보고, 가격 알려주기
*/

let fruit = prompt('무슨 과일을 사고싶으신가요?');

switch(fruit){
  case '사과' : 
  console.log('100원 입니다.');
  // break;

  case '바나나' : 
  console.log('200원 입니다.');
  // break;

  case '키위' : 
  console.log('300원 입니다.');
  // break;

  case '멜론' : 
  console.log('500원 입니다.');
  // break;

  case '수박' : 
  console.log('500원 입니다.');
  // break;

  //해당 경우에 없는 과일을 입력 했을 경우, 오류인지 실행하지 않는것인지 
  //알수가 없음 -> defult로 표시
 //!if문 에서의 else === switch문의 defult 

  /*
    현재 멜론과 수박 모두 동일한 가격이기에 
    !case '멜론':
    !case '수박':
      console.log('500원 입니다.');
      break;
    
    로도 표현 할 수 있음
  */

  default : 
  console.log('그런 과일은 없습니다.');
}
/*
 *위의 코드를 실행하면 의도한 대로 출력되는것이 아니라 
 *키위을 입력하면 키위부터 수박까지의 가격이 모두 도출되는 상황
 !=> switch문의 특성 : Break를 만나기 전의 코드를 모두 실행함!

 switch문을 사용시 하나의 case 뒤에는 break를 걸어줄것 

*/



