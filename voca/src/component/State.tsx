import React, { useState } from 'react'

export default function State() {
  // let name = "Mike";
  // 여기서의 name 은 단순히 변수일 뿐, state가 아님 

  const [name, setName] = useState('Mike');

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
      <h2 id="name" className='text-[24px] font-extrabold'>{name}</h2>
      <button onClick={changeName} className="px-4 py-2 bg-slate-300 rounded-md">change</button>
    </div>
  )
}

// !동일한 컴포넌트여도 state는 각각 개별적으로 관리됨 -> 다른 state에 영향을 미치지 않음