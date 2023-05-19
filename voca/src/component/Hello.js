

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
    console.log(e.target.value)
    // 여기서 target은 input 태그 , value는 target의 value니까 input 태그에 작성한 값을 가르킴
    // 글자를 쓸때마다 로그로 찍히게 됨
  }
  // 입력되는 텍스트를 매개변수로 받아서 출력시켜주는 방법도 있음
  /*
    function showText(txt){
      console.log(txt)
    }

    <input type="text" className="text-[#333]" onChange={(e)=>{
      const txt = e.target.value;
      showText(txt);
      }} />

  */

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

      {/* 바뀔때마다 찍혀야하기 때문에 onChange 사용 */}
      <input type="text" className="text-[#333]" onChange={showText} />
      {/* 
        위의 코드를 하단과 같이 적어도 동일하게 적용
        <input type="text" className="text-[#333]" onChange={(e)=>{
        console.log(e.target.value)
      }} />
      */}
      
    </div>
  )
}