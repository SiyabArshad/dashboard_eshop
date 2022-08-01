import * as React from 'react'
import "../Stylesheets/auth.css"
export default function Createuser() {
 const[cat,setcat]=React.useState("employee")
 const[username,setusername]=React.useState("")
 const[email,setemail]=React.useState("")
 const[password,setpassword]=React.useState("") 
 const adduserfunction=()=>{

 }

  return (
    <div className='login'>
        <div className='login2'>
            <span className='logo'>E-Shop</span>
            <select onChange={(e)=>setcat(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
            <input onChange={(e)=>setusername(e.target.value)} className='inp1' placeholder='username' type="text"></input>
            <input onChange={(e)=>setemail(e.target.value)} className='inp1' placeholder='email' type="email"></input>
            <input onChange={(e)=>setpassword(e.target.value)} className='inp1' placeholder='password' type="password"></input>
            <button>Add user</button>
        </div>
    </div>
  )
}
