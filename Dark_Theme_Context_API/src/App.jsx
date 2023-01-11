import { useState,createContext } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Parent from './Parent'
import A from './A';
import B from './B';
import C from './C';

export const darkModeContext= createContext(null);
const DarkModeProvider=darkModeContext.Provider;

function App() {

     const[darkMode,setDarkMode]=useState(false);
    function ToggleDarkMode()
    {
        setDarkMode(!darkMode);
    }

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Parent/>,


    },
    {
      path:'A',
      element:<A/>,
      caseSensitive:false

    },
    {
      path:'B',
      element:<B/>,
      caseSensitive:false

    },
    {
      path:'C',
      element:<C/>,
      caseSensitive:false

    }

  ])

  return (
<>
<DarkModeProvider value={{darkMode,ToggleDarkMode}}>
<RouterProvider router={router}></RouterProvider>
 </DarkModeProvider>
</>
  )
}

export default App
