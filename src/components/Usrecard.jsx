import React from 'react'
import "../Stylesheets/roles.css"
export default function Usrecard() {
  return (
<div className='mncorderrole'>
        <div className='userimagerole'>
        <img src={require("../Assets/user.jpeg")}></img>
        </div>
        <div className='spacrole'>
    </div>
    <div className='partextrole'>
        <span className='quesrole'>Name</span>
        <span className='ansrole'>Siyab Arshad</span>
    </div>
    <div className='partextrole'>
        <span className='quesrole'>Creation Date</span>
        <span className='ansrole'>22-june-2021</span>
    </div>
    <div className='partextrole'>
        <span className='quesrole'>Status</span>
        <span className='ansrole'>admin</span>
    </div>
    <span className='cdilveryrole'>
       Delete user
    </span>
        </div>
  )
}
