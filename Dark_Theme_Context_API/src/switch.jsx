import { useContext } from "react"
import { darkModeContext } from "./App"
function ThemeSwitch()
{  
    const {darkMode,ToggleDarkMode}=useContext(darkModeContext)
    return(
        <button onClick={()=>{console.log(darkMode),ToggleDarkMode()}}>
          switch theme
        </button>
    )
}

export default ThemeSwitch;