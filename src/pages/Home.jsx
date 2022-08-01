import * as React from 'react'
import Sidebar from '../components/Sidebar'
import "../Stylesheets/home.css"
import Icon from '@mui/material/Icon';
import Topsells from "../configurations/sellingitems"
import Graph from '../components/Graph';
import {Link} from "react-router-dom"
export default function Home() {
  const[orderstat,setorderstat]=React.useState("Monthly")
  const[userstat,setuserstat]=React.useState("Monthly")
  const[profile,setprofile]=React.useState("")
  const filterusers=()=>{
    //code for user graph filtration here
  }
  const filterorders=()=>{
    //code for order graph filtration
  }
  const changeprofile=()=>{
    //profile chnage code here
  }
  return (
    <div className='main-con'>
      <div className='pri'>
        <Sidebar></Sidebar>
        </div>
        <section className='seccon'>
          <section className='firstone'>
          <div className='parlogo'>
          <span className='logod'>Welcome,</span>
          <span className='logodm'>Daimon</span>
          </div>
          <section className='sales'>
            <div className='cardss'>
              <div className="ordercard">
                <div className='iconinside'>
                     <img src={require("../Assets/Iconly/Light/Wallet.png")}></img> 
                </div>
                <div className='orderquant'>
                  <span className='nooforder'>
                    3637829
                    </span>
                    <span className='ord'>Orders</span>                 
                </div>
                <div className='iconinside3'>
                    <span>+20</span>
                </div>
              </div>
              <div className="ordercard2">
                <div className='iconinside'>
                     <img src={require("../Assets/Iconly/Light/Wallet.png")}></img> 
                </div>
                <div className='orderquant'>
                  <span className='nooforder'>
                    $13637829
                    </span>
                    <span className='ord'>Sales</span>                 
                </div>     
              </div>
            </div>
            <section className='graph'>
              <div className='filter'>
                <span>Sale Statistics</span>
                <select onChange={(e)=>setorderstat(e.target.value)} className='inpt'>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <Graph size={{x:600,y:350}}></Graph>
            </section>
          </section>
          </section>
          <section className='secondone'>
          <div className='searchno'>
            <input className='sbox' type="text" placeholder='Search products'></input>
            <Link className='link' to="/notifications">             
            <div className='notidiv'>
              <Icon>notifications</Icon>
            </div>
            </Link>
            <div className='choose'>
              <input type="file" id="pf"></input>
            <label htmlFor='pf'> <img className='profile' src={require('../Assets/user.jpeg')}></img></label>
            </div>
          </div>
          <section className='topselling'>
            <span className='tpsi'>Top 5 Selling Items of July</span>

          {
            Topsells.map((item,i)=>{
              return(
              <div className='mntps'>
            <img src={item.img}></img>
            <div className='mntps2'>
              <span>{item.name}</span>
              <span style={{fontWeight:"bold"}}>{item.price}$</span>
            </div>
          </div>
              )
            })
          }
          </section>
          <section className='graph'>
              <div className='filter'>
                <span>Users Statistics</span>
                <select onChange={(e)=>setuserstat(e.target.value)} className='inpt'>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
<Graph size={{x:400,y:200}}></Graph>
            </section>
          </section>
        </section>
    </div>
  )
}
