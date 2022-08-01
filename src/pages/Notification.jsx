import React from 'react'
import "../Stylesheets/noti.css"
import Sidebar from '../components/Sidebar'
import notifi from "../configurations/notification"
export default function Notification() {
  return (
    <div className='main-con'>
    <div className='pri'>
        <Sidebar></Sidebar>
    </div>
    <section className='secconnoti'>
      <span className='ntf'>
      Notifications
     </span>
     {
notifi.map((item,i)=>{
  return(
<div className='alert' key={i}>
<span>{item.message}</span>
<span>{item.time}</span>
</div>)
})
     }
     
      </section>
    </div>
  )
}


