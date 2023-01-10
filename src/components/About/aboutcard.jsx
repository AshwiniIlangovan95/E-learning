import React from "react";
import Title from "../Title/Title";


function AboutCard(){
    return(
        <div>
            <section className="aboutHome">
                <div className="container flexSB">
                    <div className="left row">
                        <img src="./../../public/assests/images/background2.wepb"></img>
                    </div>
                    <div className="right row">
                        <Title subtitle= 'LEARN ANYTHING' title='Benefits about Online Learning Expertise'/>
                        <div className='items'> {homeAbout}</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutCard;