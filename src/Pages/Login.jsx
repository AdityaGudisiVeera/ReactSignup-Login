import { useState } from "react"

function Login(){
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")

    function submitFrom(e){
       e.preventDefault()
        alert(`Email:${email} password: ${password}`)//tilled
    }
    return(
        <div>
            <form onSubmit={(e)=> submitFrom(e)}>
        <div>
            <span>Email:</span>
            <input type="email" 
            name="email"
             placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
              />
        </div>
         <br/>
        <div>
            <span>Password:</span>
            <input type="password" 
            name="password" 
            placeholder="enter your Password"
            onChange={(e)=>setPassword(e.target.value)} />
            
        </div><br/>
        <button type="submit">Login</button>
      </form>
        </div>
        
    )
}
export default Login