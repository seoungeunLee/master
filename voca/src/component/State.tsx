import React, { useState } from 'react'
import UserName from './UserName';

export default function State(props: { age: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  console.log(props);
  // 해당 props로 받은 값은 컴포넌트 내부에서 변경 할 수 없음 (단방향 : 부모->자식)
  // 만약 변경하고 싶다면 컴포넌트 내부에서 state를 다시 만들어야 함


  // let name = "Mike";
  // 여기서의 name 은 단순히 변수일 뿐, state가 아님 

  const [name, setName] = useState('Mike');

  // const msg = age > 19 ? "성인입니다" : "미성년자 입니다"

  function changeName(){
    // name = name === "Mike" ? "Jane" : "Mike";
    // 이름을 바꿔주는 함수 / Mike 일 때는 Jane으로, Jane일때는 Mike로 바꿔줌
    // console.log(name);
    // document.getElementById("name").innerHTML = name; - 바닐라 js

    const newName = name === "Mike" ? "Jane" : "Mike";
    setName(newName);
    /*
    이렇게도 적어 줄 수 있음
    setName(name === "Mike" ? "Jane" : "Mike");
    */
  }

  return (
    <div>
      {/* <h1>state</h1> */}
      <h2 id="name" className='text-[24px] font-extrabold'>{name}({props.age})</h2>
      <UserName name={name} />
      <button onClick={changeName} className="px-4 py-2 bg-slate-300 rounded-md">change</button>
    </div>
  )
}

// !동일한 컴포넌트여도 state는 각각 개별적으로 관리됨 -> 다른 state에 영향을 미치지 않음

// ? 한 컴포넌트가 가지고 있는 state를 props로 넘길수도 있음