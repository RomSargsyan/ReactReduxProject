import React from 'react';
import style from './Posts.module.css';

const Posts = ({ message }) => {
	return (
		<div className={style.post}>
			<img alt="user avatar" src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" />
			<span>{message}</span>
		</div>
	)
}

export default Posts;
