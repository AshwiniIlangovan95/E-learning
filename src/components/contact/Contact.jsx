import React from "react";
import "./contact.scss";
import Back from "../Back";
import ContactCard from "./contact_card";

function Contact(){
    return(
        <div className="contact_home">
            <Back title="Contact Us"/>
            <ContactCard/>
        </div>
    )
}

export default Contact;