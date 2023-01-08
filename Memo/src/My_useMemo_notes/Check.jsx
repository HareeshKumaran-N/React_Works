import { useState } from "react";
import { useEffect,useMemo, } from "react";

function Check()
{
     const[count,setCount]=useState(0);
    const [x,setX]=useState("");
     console.log('re-Render');
     
     useEffect(()=>{
        console.log("Inside UseEffect");
     },[count]);
     
     useMemo(()=>{
        console.log("Inside UseMemo")
     },[x])
     
    return (
        <>
            <button onClick={()=>{setCount((pre)=>pre+1)}}>{count}</button>
        </>
    )
}

export default Check;