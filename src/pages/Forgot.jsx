import * as React from 'react'
import "../Stylesheets/auth.css"
export default function Forgot() {
 const[email,setemail]=React.useState("")

const forgotfunction=()=>{

}
  return (
    <div className='login'>
        <div className='login2'>
            <span className='logo'>E-Shop</span>
            <input onChange={(e)=>setemail(e.target.value)} className='inp1' placeholder='email' type="email"></input>
            <button>Send</button>
        </div>
    </div>
  )
}
