import { useState } from "react";
import './mystyle.css'
 function Card (props)
 {
     const[liked,setLike]=useState(false);
  
     function disableEnableLike()
     {
        console.log("clicked");
        if(liked)
        setLike(false);
        else
        setLike(true);
     }


    return (
        
        <div className="cardContainer"  key={props.id}>
       
        <div>ID : {props.id} </div> 
        <div>User name : {props.name}</div>
        <div>website: {props.website}</div>

        {
            (liked)?
        <button  className="LikedBtn" onClick={disableEnableLike}><span class="material-symbols-outlined LikedBtn">
        favorite
        </span></button> : <button className="btn"  onClick={disableEnableLike}><span class="material-symbols-outlined btn">
        favorite
        </span></button>

         
        }

        </div>
    )
 }
 export default Card; 