import { useState,useCallback } from "react";
import Child from "./Child";


function UCB_Parent()
{

    const[Parentcount,setParentCount]=useState(0);
    const[Childcount,setChildCount]=useState(0);
    let  handleParentCount=
    ()=>
    {
          setParentCount(Parentcount+1);
    }





    let handleChildCount=
    useCallback(()=>
    {
        return setChildCount((pre)=>pre+1)
    },[])

    console.log('re-Render from Parent');
    return (
        <>

        <p>parent count{Parentcount}</p>
        <button onClick={handleParentCount}>click to change parent count</button>
        <p>Child count{Childcount}</p>
        <Child onClick={handleChildCount}></Child>

        </>
    )
}


export default UCB_Parent