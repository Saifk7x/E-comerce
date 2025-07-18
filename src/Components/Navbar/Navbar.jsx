import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"


export default function Navbar() {
  const[menu,setMenu]=useState("Home")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} height={50} alt=''/>
            <p>Shopify</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("Home")}}>Home {menu==="Home"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("Men")}}>Men{menu==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}>Women{menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}>Kids{menu==="Kids"?<hr/>:<></>} </li>
        </ul>
    <div className='nav-login-cart'>
      <img src={cart_icon} height={40} alt=''/> 
      <div className="nav-cart-count">0</div>
        <button>Login</button>   
        
        
        
        
    </div>    
    </div>
  )
}
