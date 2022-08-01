import React from 'react'
import "../Stylesheets/sidebar.css"
import menuitems from '../configurations/menuitem'
import { AccessAlarm, ThreeDRotation,Inventory } from '@mui/icons-material';
import {Link} from "react-router-dom"
import Icon from '@mui/material/Icon';
export default function Sidebar() {
  return (
    <div className='sidemn'>
        <section className='logosec'>
            <span>Eshop</span>
        </section>
        <section className='menu'>
            {
                menuitems.map((item,i)=>(
                    <Link className='link' to={item.link}>             
               <div className='item' key={i}>
  
                     <Icon className='img' fontsize={"small"}>{item.icon}</Icon>
                    <span>{item.name}</span>
  
                </div>
                </Link>
                ))
            }
        </section>
        <section className='logout'>
                2022-eshop
        </section>
    </div>
  )
}
