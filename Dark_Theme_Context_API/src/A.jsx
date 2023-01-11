import { useContext } from "react";
import { darkModeContext } from "./App";
import {Link} from 'react-router-dom';
import ThemeSwitch from "./switch";
import './index.css'
function A()
{
    const {darkMode,ToggleDarkMode}=useContext(darkModeContext);
    
    return(
        <>
      <div className={darkMode? 'Container Container-dark' :  'Container Container-light'}>
        <h1>Hi from A.</h1>
        <ThemeSwitch></ThemeSwitch><br></br>
        <Link to='/'>GO to Parent</Link>
        <br/>
        <Link to='/B'>Go to B Component</Link>     <br/>
        <Link to='/C'>GO to C</Link>
        <br/>


        </div>
        </>
    )
}

export default A;
