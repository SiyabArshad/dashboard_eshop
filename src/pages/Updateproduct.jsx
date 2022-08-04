import * as React from 'react'
import "../Stylesheets/addproduct.css"
import cat from "../configurations/categories"
export default function Updateproduct() {
  const [localimages,setlocalimages]=React.useState([])
  const [onlineimages,setonlineimages]=React.useState([])
  const [title,settitle]=React.useState("")
  const [desc,setdesc]=React.useState("")
  const [quantity,setquantity]=React.useState(10)
  const [category,setcategory]=React.useState("Electronics")
  const [price,setprice]=React.useState(10)
  const updateproductsfunc=()=>{

  }
  const deleteproduct=()=>{
    
  }
  return (
    <div className='adpmncon'>
    <span className='adptr'>Product id #dc353672</span>
    <div className='adpformimgs'>
      <div className='adpsim'>
        <input className='adpch' type="file" id="imgs"></input>
        <label htmlFor='imgs'><img src={require("../Assets/Iconly/Light/Upload.png")} className="adpupload"></img></label> 
      </div>
      <div  className="adpslider">
      <img className='adpsliderimg' src={require("../Assets/product.jpeg")}></img>
   <img src={require("../Assets/Iconly/Light/Delete.png")} className="adpsliderdelete"></img>
   </div>
    </div>
    <div className='adpformtext'>
      <input onChange={(e)=>settitle(e.target.value)} className='adptitle' type="text" placeholder="title"></input>
      <textarea onChange={(e)=>setdesc(e.target.value)}  className='adpdesc' placeholder='decription'></textarea>
      <input min={10} max={1000} onChange={(e)=>setquantity(e.target.value)} className='adpquan'  type="number" placeholder="quantity"></input>
        <input min={1} max={1000000} onChange={(e)=>setprice(e.target.value)} className='adpquan'  type="number" placeholder="price"></input>
      <select onChange={(e)=>setcategory(e.target.value)} className='adpcat'>
        {
          cat.map((item,i)=>(
            <option value={item.cat} key={i}>{item.cat}</option>
          ))
        }
      </select>
 <button className='adpbutton'>Update</button>
 <button className='adpbutton'>Delete</button>
 
    </div>
  </div>
    )
}
