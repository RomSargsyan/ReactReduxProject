import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';

const Item = ({id, name}) => {
  return (
    <ul className={style.dialogs}>
      <li><NavLink to={`/dialogs/${id}`}>{name}</NavLink></li>
    </ul>
  )
}

export default Item;
