import { useState,useContext } from "react";
import {Link} from 'react-router-dom'
import A from "./A";

import ThemeSwitch from "./switch";
import { darkModeContext } from "./App";

function Parent()
{
   const{darkMode}=useContext(darkModeContext);

    return (
        
        
         <div className={darkMode? 'Container Container-dark' :  'Container Container-light'}>
         <h1>Hi from parent</h1>
         <Link to='/A'>Go TO A.</Link><br/>
         <Link to='/B'>Go TO B.</Link><br/>
         <Link to='/C'>GO to C</Link>
        <br/>
         <ThemeSwitch/>
         </div>
         
       

    );

}
export default Parent;
