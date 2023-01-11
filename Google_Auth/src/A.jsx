import {useContext,useEffect} from 'react';
import {userProfileContext} from './Context/userProfileContext';
import {useNavigate} from 'react-router-dom';

function A()
{
    const navigate=useNavigate();
    const {isAuthDone,userProfile}=useContext(userProfileContext);
  
    useEffect(()=>{
        if(!isAuthDone)
        {alert('Not Logged-In So re-directing to Sign In Page')
            navigate('/');}
        
    },[])
   
    console.log('@A',userProfile);
   
   return (
    <>
    <h1>User Details</h1>
    <img src={userProfile.photoURL}></img>
    <p>{userProfile.displayName}</p>
    <p>{userProfile.email}</p>
    {console.log(isAuthDone)}
   
    </>
   )
}
export default A;