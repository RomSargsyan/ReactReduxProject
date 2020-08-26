import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

const mapStateToPropsAuth = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

const WithAuthRedirect = (Component) => {
	class RedirectAuthComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Redirect to='/login' />
			return <Component {...this.props} />
		}
	}


	return connect(mapStateToPropsAuth)(RedirectAuthComponent);
}

export default WithAuthRedirect;
