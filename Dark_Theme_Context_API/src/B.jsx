import { useContext } from "react";
import { darkModeContext } from "./App";
import {Link} from 'react-router-dom';
import ThemeSwitch from "./switch";
import './index.css'
function B()
{
    const {darkMode}=useContext(darkModeContext);
    
    return(
        <>
      <div className={darkMode? 'Container Container-dark' :  'Container Container-light'}>
        <h1>Hi from B Component.</h1>
        <ThemeSwitch/><br></br>
        <Link to='/'>GO to Parent</Link><br/>
        <Link to='/A'>GO to A</Link><br/>
        <Link to='/C'>GO to C</Link><br/>


        </div>
        </>
    )
}

export default B;
