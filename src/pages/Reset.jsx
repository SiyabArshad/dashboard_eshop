import * as React from 'react'
import "../Stylesheets/auth.css"
export default function Reset() {
  const[pass,setpass]=React.useState("")
  const[confirmpass,setconfirmpass]=React.useState("")
  const resetfunction=()=>{

  }
  return (
    <div className='login'>
    <div className='login2'>
        <span className='logo'>E-Shop</span>
        <input onChange={(e)=>setpass(e.target.value)} className='inp1' placeholder='password' type="password"></input>
        <input onChange={(e)=>setconfirmpass(e.target.value)} className='inp1' placeholder='Confirm password' type="password"></input>
        <button>Reset</button>
    </div>
</div>
  )
}
