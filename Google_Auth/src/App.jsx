import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { useContext,useState } from "react";
import Parent from "./Parent";
import { ContextProvider } from "./Context/userProfileContext";
import A from './A';
import './App.css'

function App() {

  
  const [userProfile, setUserProfile] = useState({});
  const [isAuthDone, setAuthDone] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Parent />,
    },
    {
      path: "/A",
      element:<A/>
    },
  ]);

  return (
   
      <ContextProvider
        value={{ userProfile, setUserProfile, isAuthDone, setAuthDone }}
      >
        <RouterProvider router={router}></RouterProvider>
      </ContextProvider>

  );
}

export default App;
