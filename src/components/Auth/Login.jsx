import React from 'react';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router';

const Login = ({ login, isAuth, userId, ...props }) => {
	const handleSubmit = (value) => {
		login(value.email, value.password, value.rememberMe, value.captcha)
	}

	if (isAuth) {
		return <Redirect to={`/profile/${userId}`} />
	}

	return (
		<div>
			<LoginForm onSubmit={handleSubmit} {...props} />
		</div>
	)
}

export default Login;
