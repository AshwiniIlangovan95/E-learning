import React from "react";
import Back from "../Back";
import './about.scss';
import AboutCard from "./aboutcard";

function About() {
    return(
        <div className="about">
            <div>
            <Back title='About Us'/> 
            </div>
            
            <AboutCard/>
        </div>
    )
}

export default About;