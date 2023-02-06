import React from "react";
import { Team } from "../../dummydata";
import "./team.scss"


function TeamCard(){
    return(
        <div className="container">
            {Team.map((val)=>(
                <div className="items shadow">
                    <div className="img">
                        {val.cover} 
                    </div>
                    <div className="overlay">
                    <a href="https://www.facebook.com/" target="_blank">   <i className="fab fa-facebook-f icon"></i> </a>
                    <a href="https://www.instagram.com/" target="_blank" > <i className="fab fa-instagram icon"></i></a>
                    <a href="https://twitter.com/?lang=en-in" target="_blank" >   <i className="fab fa-twitter icon"></i></a>
                    <a href="https://www.youtube.com/" target="_blank" >  <i className="fab fa-youtube icon"></i></a>
                    </div>
                        
                    <div className="details">
                        <h2>{val.name}</h2>
                        <p>{val.work}</p>
                    </div>
                   
                </div>
            ))}
        </div>
    )
}

export default TeamCard;