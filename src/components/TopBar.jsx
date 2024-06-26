import React, {Component} from 'react';
import defaultImg from '../assets/images/default.jpg'

class TopBar extends Component{
	render(){
    return (
        <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow navColor">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
				<i className="fa fa-bars"></i>
			</button>
            <ul className="navbar-nav ml-auto">				
				<p className="holaAdmin">Hola admin!</p>
                <div className="topbar-divider d-none d-sm-block"></div>
                <li className="nav-item dropdown no-arrow">
					<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
						<span className="mr-2 d-none d-lg-inline text-gray-600 small"></span>
						<img className="img-profile rounded-circle" src={defaultImg} alt="Jordan Walke - Creador de React" width="60"/>
					</a>
					
				</li>
            </ul>
        </nav>
    )
}}

export default TopBar;