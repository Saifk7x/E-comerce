
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Shop from './Pages/Shop'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/men" element={<ShopCategory category="mens"/>}/>
        <Route path="/women" element={<ShopCategory category="womens"/>}/>
        <Route path="/kids" element={<ShopCategory category="kids"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path=":productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        
        

      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

