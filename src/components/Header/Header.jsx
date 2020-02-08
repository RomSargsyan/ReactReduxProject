import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt="logo" src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" />
      <div className={s.login}>
        { props.isAuth && <div> {props.login} <button onClick={props.logout}>logout</button> </div> }
        { !props.isAuth && <NavLink to='/login'>Login</NavLink>  }
      </div>
    </header>

  )
}

export default Header;
