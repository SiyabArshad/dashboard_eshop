import * as React from 'react'
import "../Stylesheets/auth.css"
export default function Login() {
 const[email,setemail]=React.useState("")
 const[password,setpassword]=React.useState("") 
 const loginfunction=()=>{

 }
const forgotfunction=()=>{

}
  return (
    <div className='login'>
        <div className='login2'>
            <span className='logo'>E-Shop</span>
            <input onChange={(e)=>setemail(e.target.value)} className='inp1' placeholder='email' type="email"></input>
            <input onChange={(e)=>setpassword(e.target.value)} className='inp1' placeholder='password' type="password"></input>
            <button>Login</button>
            <span>Forgot password?</span>
        </div>
    </div>
  )
}
