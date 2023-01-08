import { useState, useMemo } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

//  let Ivalue= useMemo(() => {
//     let i = null;
//     for (i = 1; i < 900000000; i++) {}
//      console.log('ran');
//     return i;
//   },[]);


  
  return (
    <>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        count
      </button>
      <p>
       
        {count}
        {count % 2 == 0 ? " even" : " odd"}
      </p>
      <p>
      {Ivalue}
      </p>
    </>
  );
};

export default Test;
