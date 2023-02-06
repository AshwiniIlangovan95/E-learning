import { useNavigate} from "react-router-dom";
import React from "react";
import "./signup.css";
import { loginDetails, setLoggedInUser } from "../../dummydata";
import { useState } from "react";



const Signup = ()=>{
    const[email, setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();
    const loggedInUser= loginDetails.filter((loginDetail)=> loginDetail.username===email && loginDetail.password===password);

    const handleSubmit=()=>{
        
        console.log(loggedInUser)
        if(loggedInUser.length){
            alert("logged in successfully")
           navigate('/courses');
           setLoggedInUser(loggedInUser);
        }else{
            alert("login failed")
        }
    } 

    const isUserLoggedIn=()=>{
        return loggedInUser.length;
    }
    

    return(
        <div className="container">
            <div className="signup">
                <h1>LogIn</h1>
                <form className="login-form" >
                    <label>Username:</label><br/>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required/><br/><br/>
                    <label>Password:</label><br/>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} required/><br/><br/>
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <button>Register</button>
                </form>
            </div>
            

        </div>
    )
}

export default Signup;