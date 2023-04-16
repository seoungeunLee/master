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



  //! 함수 생성 - 이름과 나이를 받아서 객체를 생성하는 함수 
  function makeObject(name, age){
    return{
      // name: name,
      name,
      // age : age,
      age,
      hobby : 'football',
    }
  }
  const Mike = makeObject('Mike', 30);
  console.log(Mike);
  /*
    결과 : 

    Object {
      age : 30,
      hobby : 'football',
      neme : 'Mike'
    }
  */

  
  //프로퍼티 확인 : in
  console.log('age' in Mike); // true
  console.log('birthday' in Mike); //false



  //! 인수로 유저의 객체를 받고, 나이를 확인하여 성인인지 아닌지 구분하는 함수
  function isAdult(user){
    if(user.age < 20){
      return false
    }
    return true;
  }

  // user 객체 생성
  const Mikeee = {
    name : 'Mikeee',
    age : 30
  }
  
  const Jane = {
    name : 'Jane',
  }

  console.log(isAdult(Mikeee)); // true
  console.log(isAdult(Jane)); // true -> 나이를 입력하지 않았는데도 true 반환
  /*
    if(user.age < 20){
      return false
    }
    return true;


    해당 조건문에서 age가 없기때문에 조건문을 건너뛰고 true 반환

    if( !('age' in user) || user.age < 20 ){
      return false;
    }
    return true;

  */






    //객체 For in 문
    const Mikeeee = {
      name : "Mikeeee",
      age : 30,
    };

    for(key in Mikeeee){
      console.log(key); // name, age 가 찍힘 - Mikeeee가 가지고 있는 키값

      console.log(Mikeeee[key]);
      // Mikeeee['name']
      // Mikeeee['age']
    }

    

