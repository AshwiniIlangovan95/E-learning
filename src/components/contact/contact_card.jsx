import React from "react";
import { contactUs } from "../../dummydata";
import "./contact.scss"

function ContactCard(){
    return(
        <div className="container1">
            {contactUs.map((val)=>(
                <>
                <div>
                    {val.cover}
                </div>
                <div>
                    <h4>{val.contact_head}</h4>
                    <p>{val.desc}</p>
                    <p>{val.desc2}</p>
                </div>
                </>
            ))}
        </div>
    )
}

export default ContactCard;