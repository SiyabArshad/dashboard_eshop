import React from 'react'
import "../Stylesheets/products.css"
export default function ProructCard() {
  return (
    <div className='flipcardprod'>
        <div className='innerprod'>
    <div className='mncorderprod'>
        <img className='primgprod' src={require("../Assets/product.jpeg")}></img>
        </div>
    <div className='mncorderbackprod'>
    <div className='partextprod'>
        <span className='quesprod'>Shopping bags import quality</span>
    </div>
    <div className='partextprod'>
        <span className='ansprod'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sint dolorum exercitationem iure aut aperiam, repudiandae possimus maiores quae delectus repellat dignissimos accusamus praesentium ad quisquam ea. Fugiat, expedita incidunt. </span>
    </div>
    <div className='partextprod'>
        <span className='quesprod'>qty 8</span>
    </div>
    <div className='partextprod'>
        <span className='quesprod'>category bags</span>
    </div>
    </div>
    </div>
    </div>
  )
}
