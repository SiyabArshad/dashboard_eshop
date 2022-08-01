import * as React from 'react'
import "../Stylesheets/products.css"
import Sidebar from '../components/Sidebar'
import ProructCard from '../components/ProructCard'
import pds from "../configurations/products"
import {Link} from "react-router-dom"

export default function Product() {
  const[clp,setclp]=React.useState(true)
  const allproducts=[]
  const[ind,setind]=React.useState(0)
  const reducerfunc=(state,action)=>{
      switch(action.type)
      {
        case "products":
          return action.payload.slice(0,8)
        case "next":
          return state.slice(action.index,action.index+8)
        case "prev":
          return action.index>0&&state.slice(action.index-8,action.index)
        default:
          return state
      }
  }
  const[products,dispatch]=React.useReducer(reducerfunc,allproducts)
  React.useEffect(()=>{
    if(clp)
    {
      dispatch({type:"products",payload:pds})
    }
    return setclp(false)
  },[])
  
  return (
    <div className='main-conprod'>
    <div className='priprod'>
      <Sidebar></Sidebar>
      </div>
      <section className='secconodprod'>
      <div className='prodheaders'>
      <span className='logtextprod'>Products</span>
       <input type="text" placeholder="search"></input>
      </div>
       <div className='ocdsprod'>
        {
            pds.map((item,i)=>(
              <Link key={i} className='link' to="/update/328">             
                <ProructCard></ProructCard>
                </Link>
            ))
        }
        
      </div>
      <div className='paginationprod'>
          <span onClick={()=>dispatch({type:"prev",index:products.length})}  className='prevprod'>Prev</span>
          <span onClick={()=>dispatch({type:"next",index:products.length})}  className='nextprod'>Next</span>
      </div>   
 </section>
 </div>

  )
}
