import React from "react";
import Back from "../Back";
import TeamCard from "./teamCard";
import "./team.scss";

function Team(){
    return(
        <div className="team_home">
            <Back title="Team"/>
            
            <TeamCard/>
        </div>
    )
}

export default Team;