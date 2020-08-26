import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({ id, name }) => {
	return (
		<ul className="message-item">
			<li className="message-item-name"><NavLink to={`/dialogs/${id}`}>{name}</NavLink></li>
		</ul>
	)
}

export default Item;
