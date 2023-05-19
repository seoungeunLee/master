import React from 'react'

export default function State() {
  let name = "Mike";

  function changeName(){
    name = name === "Mike" ? "Jane" : "Mike";
    // 이름을 바꿔주는 함수 / Mike 일 때는 Jane으로, Jane일때는 Mike로 바꿔줌
  }

  return (
    <div>
      <h1>state</h1>
      <h2>{name}</h2>
      <button onClick={changeName}>change</button>
    </div>
  )
}
