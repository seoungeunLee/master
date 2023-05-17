

// const Hello = function(){
//   <p>Hello</p>
// }

// export default Hello;

// const Hello = () => {
//   <p>Hello</p>
// }

// export default Hello;
export default function Hello(){
  // return <p className="text-[#000]">Hello</p>

  // ? 01. 미리 함수를 하나 만들어두고 전달하는 방식
  function showName(){
    console.log('Mike');
  }

  function showAge(age){
    console.log(age)
  }



  function showText(e){
    console.log()
  }

  return(
    <div>
      <h1>Hello</h1>
      <button className="bg-[green]" onClick={showName}>Show name</button>
      {/* ? 02. 태그 내부에 함수를 직접 입력 - 매개변수를 전달하기 용이함*/}
      <button className="bg-[yellow]" onClick={
        // ()=>{
        //   console.log(30);
        // }
        () => {
          showAge(10)
        }
      }>Show age</button>
      <input type="text" className="text-[#333]" onChange={showAge}></input>
    </div>
  )
}