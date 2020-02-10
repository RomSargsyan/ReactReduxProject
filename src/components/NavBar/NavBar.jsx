import React from "react";
import { NavLink } from "react-router-dom";

import style from "./NavBar.module.css";

const NavBar = () => (
  <nav className={style.nav}>
    <ul>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/dialogs">Message</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
