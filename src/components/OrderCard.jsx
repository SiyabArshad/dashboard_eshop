import React from 'react'
import "../Stylesheets/order.css"
export default function OrderCard() {
  return (
    <div className='flipcard'>
        <div className='inner'>
    <div className='mncorder'>
        <div className='userimage'>
        <img src={require("../Assets/user.jpeg")}></img>
        </div>
        <div className='spac'>
    </div>
    <div className='partext'>
        <span className='ques'>Order id</span>
        <span className='ans'>#4256fd</span>
    </div>
    <div className='partext'>
        <span className='ques'>Name</span>
        <span className='ans'>Siyab Arshad</span>
    </div>
    <div className='partext'>
        <span className='ques'>Order Date</span>
        <span className='ans'>Siyab Arshad</span>
    </div>
    <div className='partext'>
        <span className='ques'>Delivery Date</span>
        <span className='ans'>Siyab Arshad</span>
    </div>
    <div className='partext'>
        <span className='ques'>Status</span>
        <span className='ans'>pending</span>
    </div>
        </div>
    <div className='mncorderback'>
    <div className='partext'>
        <span className='ans'>zyz anc stretet 8990 g10</span>
    </div>
    <div className='partext'>
        <span className='ques'>Product id</span>
        <span className='ans'>8939cd9939</span>
    </div>
    <div className='partext'>
        <span className='ques'>qty</span>
        <span className='ans'>8</span>
    </div>
    <span className='cdilvery'>
        Confirm Delivery
    </span>

    </div>
    </div>
    </div>
  )
}
