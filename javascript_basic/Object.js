//! < 객체 (Object) >
/*
  :  중괄호로 작성,
    키(Key)와 값(Value)로 구성된 프로퍼티로 구성

    각 프로퍼티는 ,로 구분
*/
const superman = {
  name : 'clark',
  age : 33, //마지막 쉼표는 없어도 되지만, 있는것이 수정,삭제,이동에 유리함
}

/*
  *- 객체의 접근 : '.', ['']를 사용
*/
  superman.name // 'clark'
  superman['age'] // 33

/* 
  *- 객체의 추가 : '.', ['']를 사용
*/
  superman.gender = 'male';
  superman['hairColor'] = 'black';

/*
  *- 객체의 삭제 : delete 키워드 사용 (삭제하고픈 프로퍼티 앞에 붙여줌)
*/
  delete superman.hairColor;


  //* 단축 프로퍼티
  const name = 'clark'; 
  const age = 33;

  const superman = {
    name : 'clark', //! name : name
    age : 33, //! age : age
    gender : 'male',
  }
  // -> 이 코드는 하단과 같이 사용 할 수 있다.
  const superman = {
    name, // === name : name
    age, // === age : age
    gender : 'male',
  }


  //* 프로퍼티 존재 여부 확인 : in 연산자
  /* 
  : 객체에 존재하지 않는 프로퍼티에 접근하면 에러가 나는것이 아닌 undefined가 출력됨

    어떤 경우에 in 연산자를 사용? : 어떤 값이 넘어 올 지 모를때 사용
    ex. 함수의 인자로 받을때, api통신을 통해 데이터를 받아올때 등등
  */
  'birthDay' in superman; //false
  'age' in superman; //true


  //? 01. for in  반복뮨 : 객체를 순회하면서 값을 받아올 수 잇음
  for (let Key in superman){
    console.log(Key);
    console.log(superman[Key]);
  } 



  //01. 객체생성
  const superman1 = {
    name : 'clark1',
    age : 30,
  }

  console.log(superman1.neme); // clark1 
  console.log(superman1['age']); // 30
  
  console.log(superman1); //객체 자체를 찍어보면
  /*
    Object { 
      age : 30,
      name : "clark1"
    }
    이렇게 객체 내부의 프로퍼티를 보여줌
  */

  //프로퍼티 추가
  superman1.gender = 'male';
  superman1['hairColor'] = 'black';
  console.log(superman1);
  /*
    Object{
      age : 30,
      gender : 'male',
      hairColor : 'black',
      name : 'clark1'
    }
  */

  //프로파티 삭제
  delete superman1.gender;
  delete superman1['hairColor'];
  /*
    Object { 
      age : 30,
      name : "clark1"
    }
  */
