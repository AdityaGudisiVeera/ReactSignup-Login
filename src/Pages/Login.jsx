import { useState } from "react";
import "./Login.css";

function Login(){ 
    let [email,setEmail]=useState("") 
    let [password,setPassword]=useState("") 

    function submitFrom(e){ 
       e.preventDefault() 
        alert(`Email:${email} password: ${password}`)
    } 

    return( 
        <div className="login-container"> 
            <form className="login-form" onSubmit={submitFrom}> 
                <h2>Login</h2>

                <div className="form-group"> 
                    <label>Email:</label> 
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email"
                        onChange={(e)=>setEmail(e.target.value)} 
                    /> 
                </div> 

                <div className="form-group"> 
                    <label>Password:</label> 
                    <input 
                        type="password" 
                        name="password"  
                        placeholder="Enter your password"
                        onChange={(e)=>setPassword(e.target.value)} 
                    /> 
                </div> 

                <button type="submit">Login</button> 
            </form> 
        </div> 
    ) 
}

export default Login;