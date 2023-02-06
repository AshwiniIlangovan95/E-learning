import React from "react";

import { Link } from "react-router-dom";

 const Head = (props)=>{
    
    return (
        <div>
            <section className="Head">
                <div className="containerflex">
                    <div className="logo">
                        <h1>LEARNER</h1>
                        <span>Online Education & Learning</span>
                    </div>
                    <div className="social">
                    <Link className="cart" to="/cart"><i className="fas fa-cart-plus"></i> <span>{props.courses.length}</span></Link>
                        
                        <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f icon"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram icon"></i></a>
                        <a href="https://twitter.com/?lang=en-in" target="_blank"><i className="fab fa-twitter icon"></i></a>
                        <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube icon"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
 }

 export default Head;