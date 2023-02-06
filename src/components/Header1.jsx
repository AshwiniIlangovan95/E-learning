import React from "react";
import Head from "./Head1"
import "./Header.css"
import { Link, Outlet } from "react-router-dom";

const Header = (props)=>{
    console.log(props);
    // const [click, setClick]=useState(false)
    return(
        <div>
            <Head courses={props.courses}/>
            <div className="Header">
                <nav className="flexSB">
                    {/* <ul className={click ? "mobile-nav": "flexSB"} onClick={()=> setClick(false)}> */}
                    <ul className="flexSB">
                        <li> 
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                             <Link to="/courses">All Courses</Link>
                        </li>
                        <li>
                             <Link to="/about">About</Link>
                        </li>
                        
                        <li>
                             <Link to="/team">Team</Link>
                        </li>
                        <li>
                             <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="start">
                        <div className="button"> GET CERTIFICATE</div>
                    </div>
                    {/* <button className="toggle" onClick={()=> setClick(false)} > {click ? <i</button> */}
                </nav>
            </div>
        <Outlet />

        </div>
    )
}

export default Header;