import * as React from 'react'
import "../Stylesheets/roles.css"
import Sidebar from '../components/Sidebar'
import roles from "../configurations/roles"
import Usrecard from '../components/Usrecard'
import {Link} from "react-router-dom"
export default function Roles() {
  return (
    <div className='main-conrole'>
    <div className='prirole'>
      <Sidebar></Sidebar>
      </div>
      <section className='secconr'>
       <div className='headerrole'>
       <span className='logtextrole'>Control Room</span>
       <Link className='link' to="/createuser">             
       <span className='logtext1role'>Add user</span>
       </Link>
       </div>
       <div className='ocdsrole'>
         {
            roles.map((item,i)=>(
                <Usrecard key={i}></Usrecard>
            ))
         }
      </div>
 </section>
 </div>

  )
}
