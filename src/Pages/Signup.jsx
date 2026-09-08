import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup(){ 
    const navigate = useNavigate();

    function submitForm(e){ 
       e.preventDefault() 
       navigate("/login")
    } 

    return( 
        <div className="signup-container"> 
            <form className="signup-form" onSubmit={submitForm}> 
                <h2>Sign Up</h2>

                <div className="form-group"> 
                    <label>Name:</label> 
                    <input 
                        type="text"
                        placeholder="Enter your name" 
                    /> 
                </div> 

                <div className="form-group"> 
                    <label>Roll No:</label> 
                    <input 
                        type="text"
                        placeholder="Enter your RollNo" 
                    /> 
                </div> 

                <div className="form-group"> 
                    <label>Email:</label> 
                    <input 
                        type="email"
                        placeholder="Enter your email" 
                    /> 
                </div> 

                <div className="form-group"> 
                    <label>Password:</label> 
                    <input 
                        type="password"
                        placeholder="Enter your password" 
                    /> 
                </div> 

                <button type="submit">Sign Up</button> 
            </form> 
        </div> 
    ) 
}

export default Signup;