import * as React from 'react'
import "../Stylesheets/order.css"
import Sidebar from '../components/Sidebar'
import Icon from '@mui/material/Icon';
import OrderCard from '../components/OrderCard';
import ords from "../configurations/orders"
export default function Order() {
  const[clp,setclp]=React.useState(true)
  const allorders=[]
  const[ind,setind]=React.useState(0)
  const reducerfunc=(state,action)=>{
      switch(action.type)
      {
        case "orders":
          return action.payload.slice(0,8)
        case "next":
          return state.slice(action.index,action.index+8)
        case "prev":
          return action.index>0&&state.slice(action.index-8,action.index)
        default:
          return state
      }
  }
  const[orders,dispatch]=React.useReducer(reducerfunc,allorders)
  React.useEffect(()=>{
    if(clp)
    {
      dispatch({type:"orders",payload:ords})
    }
    return setclp(false)
  },[])
  console.log(orders)
  return (
    <div className='main-con'>
      <div className='pri'>
        <Sidebar></Sidebar>
        </div>
        <section className='secconod'>
            <div className='orhead'>
            <span className='logtext'>Orders</span>
            </div>
         <div className='ocds'>
            {
                orders.map((item,i)=>(
                    <OrderCard key={i} props={item}></OrderCard>
                ))
            }
        </div>
        <div className='pagination'>
            <span onClick={()=>dispatch({type:"prev",index:orders.length})} className='prev'>Prev</span>
            <span onClick={()=>dispatch({type:"next",index:orders.length})} className='next'>Next</span>
        </div>   
   </section>
   </div>

  )
}
