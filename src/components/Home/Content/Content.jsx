import React from "react";
import Title from "../../Title/Title";
import "./Content.css"

const Content = ()=>{
    return(
        <div>
            <section className="content">
                <div className="container">
                    <div className="row"><br/><br/><br/>
                        <Title subtitle = 'WELCOME TO LEARNER' title = 'Best Training Institute' />
                        <p>Learner provides free and open access to a selection of introductory courses taught by distinguished teachers and scholars at Yale University. The aim of the project is to expand access to educational materials for all who wish to learn.</p>
                        <div className="button">
                            <button className="primary-btn">
                                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                            <button >
                                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                        </div>   
                    </div>
                </div>

            </section>
            <div className="margin"></div>
        </div>
    )
}


export default Content;