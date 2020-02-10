import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

const Header = ({isAuth, login, logout}) => {
  return (
    <header className={style.header}>
      <img alt="logo" src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" />
      <div className={style.login}>
        { isAuth && <div> {login} <button onClick={logout}>logout</button> </div> }
        { !isAuth && <NavLink to='/login'>Login</NavLink>  }
      </div>
    </header>

  )
}

export default Header;
