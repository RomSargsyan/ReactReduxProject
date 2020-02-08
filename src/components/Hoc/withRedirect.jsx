import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

let mapStateToPropsAuth = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

let WithAuthRedirect = (Component) => {
  class RedirectAuthComponent extends React.Component {
    render() {
      if(!this.props.isAuth) return <Redirect to='/login' />
      return <Component {...this.props}/>
    }
  }


  return connect(mapStateToPropsAuth)(RedirectAuthComponent);
}

export default WithAuthRedirect;
