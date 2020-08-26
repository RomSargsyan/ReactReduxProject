import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment, faUsers, faWarehouse } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => (
	<ul className="navBar navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
		<NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
			<div className="sidebar-brand-icon rotate-n-15">
				<FontAwesomeIcon icon={faWarehouse} />
			</div>
			<div className="sidebar-brand-text mx-3">Orion</div>
		</NavLink>
		<hr className="sidebar-divider my-0" />
		<li className="nav-item">
			<NavLink className="nav-link pl-5 p-3" to="/profile">
				<FontAwesomeIcon icon={faUser} />
				<span className="p-2" style={{ fontSize: '1.2rem' }}>Profile</span>
			</NavLink>
		</li>
		<hr className="sidebar-divider my-0" />
		<li className="nav-item">
			<NavLink className="nav-link pl-5 p-3" to="/dialogs">
				<FontAwesomeIcon icon={faComment} />
				<span className="p-2" style={{ fontSize: '1.2rem' }}>Message</span>
			</NavLink>
		</li>
		<hr className="sidebar-divider my-0" />
		<li className="nav-item">
			<NavLink className="nav-link pl-5 p-3" to="/users">
				<FontAwesomeIcon icon={faUsers} />
				<span className="p-2" style={{ fontSize: '1.2rem' }}>Users</span>
			</NavLink>
		</li>
		<hr className="sidebar-divider d-none d-md-block" />
	</ul>
);

export default NavBar;

