import { useState } from "react"

function Signup(){
    let [Name,setName]=useState("")
    let [RollNo,setRollNo]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    

    function submitFrom(e){
       e.preventDefault()
        alert(` Name :${Name} RollNo:${RollNo} Email:${email} password: ${password}`)//tilled
    }
    return(
        <div>
            <form onSubmit={(e)=> submitFrom(e)}>
          <div>
            <span>Name:</span>
            <input type="name" 
            name="name"
             placeholder="Enter your name"
            onChange={(e)=>setName(e.target.value)}
              />
        </div>
        <br/>
        <div>
            <span>RollNo:</span>
            <input type="rollno" 
            name="rollno"
             placeholder="Enter your RollNo"
            onChange={(e)=>setRollNo(e.target.value)}
              />
        </div>  
        <br/>    
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
        <button type="submit">SignUp</button>
      </form>
        </div>
        
    )
}
export default Signup