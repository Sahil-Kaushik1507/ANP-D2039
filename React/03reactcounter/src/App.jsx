import { useState } from "react";

function App() {
  const [count,setCount] = useState(0)

  // let count =0;
//   const myele= document.getElementById('myele');

// console.log(myele)
  const inc = ()=>{
    // count++;
    // myele.innerText=count;
    // console.log(count)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
  }

  const dec = ()=>{
    // count--;
    //  myele.innerText=count;
    // console.log(count)
    setCount(count-1)
  }

  return (
    <>
    <h1> React Counter   {count} </h1>

    <p id="myele"> {count}</p>

    <button onClick={inc}>Increase   {count}  </button>
    <button onClick={dec}>Decrease  {count} </button>
      
      <div> {count}</div>
      <span> {count}</span>
    </>
  )
}

export default App
