
import {useState} from 'react';
import Child from './Child'


export default function Parent()
{
  const[clickCount,setclickCount]=useState(0);
  console.log('Parent mounted')
   return (
    <>
    
    <span>Number of clicks 👆{clickCount}</span>
    <button onClick={()=>{setclickCount((prevState)=>prevState+1)}}>Click Me</button>
    
     <Child clickCount={clickCount}/>{/* This child has a changing value in props, so it will be re-rendered */}
     <Child /> {/* This child has a no changing value in props  so it will not re-render*/}
    </>
   )
}
