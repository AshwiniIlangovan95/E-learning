import React from "react";
import Head from "./Head1"
import "./Header.css"
import { Link, Outlet } from "react-router-dom";

const Header = ()=>{
    // const [click, setClick]=useState(false)
    return(
        <div>
            <Head/>
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
                             <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                             <Link to="/team">Team</Link>
                        </li>
                        <li>
                             <Link to="/contact">Contact</Link>
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