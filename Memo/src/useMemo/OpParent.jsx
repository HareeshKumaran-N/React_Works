import { useMemo,useState } from "react";
import Child from "./DemoChild";
const LoopUpToMemo = () => {
//   const[counter,setCounter]=useState(0);
    
    let counter=0;

   counter=useMemo(() => {
    console.log("UM running");
    let count = 0;
    for (let i = 1; i <= 100; i++) {
      count += i;
    }

    return count;
    // counter=count;
    // setCounter(count);
  },[]);

  console.log("Parent Re-Render");

  return (
    <>
      <p>use Memo Counter: {counter}</p>
      <Child/>
    </>
  );
};

export default LoopUpToMemo;
