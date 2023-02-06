import React from "react";
import Title from "../Title/Title";
import { homeAbout } from "../../dummydata";
import './about.scss'
import Picture from "../../Images/background3.jpg"


function AboutCard(){
    return(
    
        <div>
            <section className="aboutHome">
                <div className="container3 flexSB">
                    <div className="left row">
                        <img src={Picture} alt=""/>
                    </div>
                    
                    <div className="right row">
                        <Title subtitle= 'LEARN ANYTHING' title='Benefits about Online Learning Expertise'/>
                        <div className='items'>
                             {homeAbout.map((val)=>{
                                return(
                                 <div className="itemsflexSB">
                                <div className="photo">
                                    <img src={val.cover} alt=""/>
                                    <h2>{val.title}</h2>
                                </div>  
                                <div className="text">
                                    
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                            )
                            })}
                            </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default AboutCard;