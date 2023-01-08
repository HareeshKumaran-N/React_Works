import { useState, useEffect } from "react";
import Child from "./DemoChild";
export default function Parent() {
  const [final, SetFinal] = useState(0);

   useEffect(() =>
   {
    console.log("UE Running")
    let count = 0;
    for (let i = 1; i <= 100; i++) {
      count = count + i;
    }

    SetFinal(count);
    
  
  }, []);

  console.log("Re-render from parent");

  return (
    <>
      <p>useEffect: {final} </p>
      {/* <Child/> */}
    </>
  );
}
