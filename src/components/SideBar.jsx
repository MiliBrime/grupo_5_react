import React, { Component } from 'react';
import {Link} from "react-router-dom"

import tvsH from '../assets/images/tvsH-1.png';

class SideBar extends Component{
	render(){
    return (
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
			<div className="sidebar-brand-icon">
				<img className="w-100" src={tvsH} alt="Digital House"/>
			</div>
			</Link>
        <hr className="sidebar-divider my-0"/>
        <li className="nav-item active">
			<Link className="nav-link" to="/">
				<i className="fas fa-fw fa-tachometer-alt"></i>
				<span>The Vitamin Shop</span>
            </Link>
		</li>
        <hr className="sidebar-divider"/>
        <div className="sidebar-heading">Ver</div>
        <li className="nav-item">
			<Link className="nav-link collapsed" to="/users">
				<i className="fas fa-fw fa-folder"></i>
				<span>Usuarios</span>
			</Link>
		</li>
        <li className="nav-item">
			<Link className="nav-link" to="/products">
				<i className="fas fa-fw fa-chart-area"></i>
				<span>Productos</span>
            </Link>
		</li>
        <hr className="sidebar-divider d-none d-md-block"/>
    </ul>
    )
}}

export default SideBar;