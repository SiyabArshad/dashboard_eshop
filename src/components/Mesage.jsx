import React from 'react'
import "../Stylesheets/general.css"
import Icon from '@mui/material/Icon';
export default function Mesage() {
  return (
    <div className='messagemain'>
        <span className='msgtext'>Your Message Here</span>
        <Icon className="icon">close</Icon>
    </div>
  )
}
