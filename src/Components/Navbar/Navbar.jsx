import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import { Link} from 'react-router-dom'


export default function Navbar() {
  const[menu,setMenu]=useState("Home")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} height={50} alt=''/>
            <p>Shopify</p>
        </div>
        <ul className="nav-menu">
           <Link to="/"> <li onClick={()=>{setMenu("Home")}}> Home {menu==="Home"?<hr />:<></>}</li></Link>
           <Link to="/men">  <li onClick={()=>{setMenu("Men")}}>Men{menu==="Men"?<hr/>:<></>}</li></Link>
           <Link to="/women"> <li onClick={()=>{setMenu("Women")}}>Women{menu==="Women"?<hr/>:<></>}</li></Link>
           <Link to="/kids"> <li onClick={()=>{setMenu("Kids")}}>Kids{menu==="Kids"?<hr/>:<></>} </li></Link>
        </ul>
    <div className='nav-login-cart'>
     <Link to="/cart"> <img src={cart_icon} height={40} alt=''/> </Link>
      <div className="nav-cart-count">0</div>
      <Link to="/login"> <button>Login</button> </Link>  
        
        
        
        
    </div>    
    </div>
  )
}
