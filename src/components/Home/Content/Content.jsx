import React from "react";
import { Link, Outlet } from "react-router-dom";
import Title from "../../Title/Title";
import "./Content.scss"  

const Content = ()=>{
    return(
        <div>
            <section className="content">
                <div className="container">
                    <div className="row"><br/><br/><br/>
                        <Title subtitle = 'WELCOME TO LEARNER' title = 'Best Training Institute' />
                        <p>Learner provides free and open access to a selection of introductory courses taught by distinguished teachers and scholars at Yale University. The aim of the project is to expand access to educational materials for all who wish to learn.</p>
                        <div >
                        <nav>
                            <ul className="signup-link" >
                                <li className="signup-button">
                                    <Link to="signup">SIGN IN</Link>
                                </li>
                                <li className="viewcourses-button">
                                    <Link to="/Courses">VIEW COURSES</Link>
                                </li>
                            </ul>
                        </nav>
                                {/* <button className="primary-btn"  >
                                LOGIN NOW <i ></i>
                                </button>
                                
                            
                            <button >
                                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                            </button> */}
                        </div>   
                    </div>
                </div>

            </section>
            <Outlet/>
        </div>
    )
}


export default Content;