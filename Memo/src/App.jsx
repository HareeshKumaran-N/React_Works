import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
// import Parent from './Memo/Parent'
import DemoParent from "./useMemo/Parent";
import LoopUpToMemo from "./useMemo/OpParent";
import Test from './My_useMemo_notes/test1'
import Check from './My_useMemo_notes/Check'
import Bad from './useEffect_vs_useMemo/Bad_UE_Approach'
import Good_UseMemo from "./useEffect_vs_useMemo/Good_UM_Approach";
import UCBParent from "./useCallBack/Parent";
import DynamicForm from "./Dynamic_Input_Form_Elements/Parent";

function App() {
  return (
    // <DemoParent/>
    // <LoopUpToMemo />
   // <Test/>
   //<Check/>

  //  <Bad/>
  //  <Good_UseMemo/>
  //<UCBParent/>
  <DynamicForm/>


  );
}

export default App;
