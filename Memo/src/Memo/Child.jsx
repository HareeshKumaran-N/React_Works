import {memo} from 'react';



export default  memo (function Child({clickCount})
{
 
   console.log("Child mounted",clickCount);
   return (
    <>
    <p>Hi from Child Component</p>

    
    </>
   )
})
