import { useState } from 'react'
import React,{Component} from 'react'
import '../assets/css/app.css'
import '../App.css'
import {Link, Route, Routes} from "react-router-dom"

import Home from './Home'
import Users from './Users'
import Products from './Products'
import ProductsByCategorie from './ProductsByCategorie'
import ProductDetail from './ProductDetail';
import UserDetail from './UserDetail';

class App extends Component {
  render(){
  return (
    <div id="wrapper">
      <Link to="/" exact="true"></Link>
      <Link to= "/users"></Link>
      <Link to= "/products"></Link>
      <Link to= "/products/categories"></Link>
      <Link to= "/products/detail"></Link>
      <Link to= "/users/detail"></Link>


      <Routes>
        <Route path= "/" exact="true" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/categories" element={<ProductsByCategorie/>}/>
        <Route path="/products/detail" element={<ProductDetail/>}/>
        <Route path="/users/detail" element={<UserDetail/>}/>

      </Routes>
    </div>
    
  )
}}

export default App
