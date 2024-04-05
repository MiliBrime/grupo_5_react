import { useState } from 'react'
import React,{Component} from 'react'
import '../assets/css/app.css'
import '../App.css'
import {Link, Route, Routes} from "react-router-dom"

import Home from './Home'
import Users from './Users'
import Products from './Products'

class App extends Component {
  render(){
  return (
    <div id="wrapper">
      <Link to="/" exact="true"></Link>
      <Link to= "/users"></Link>
      <Link to= "/products"></Link>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" exact={true}  element={<Users/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" exact={true} element={<Users/>}/>

      </Routes>
    </div>
    
  )
}}

export default App
