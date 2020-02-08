import React, { Suspense } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { appInitiaton } from './redux/app-reducer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Auth/LoginContainer';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
// import UsersContainer from './components/Users/UsersContainer';
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.appInitiaton();
  }

  render() {
    if(!this.props.isInitiation) {
      return <div>Loading...</div>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={ () => <ProfileContainer />} />
          <Route path="/dialogs" render={ () => <DialogsContainer /> } />
          <Route path="/users" render={ () => (
            <Suspense fallback={<div>Loading...</div>}>
              <UsersContainer />
            </Suspense>)
          } />
          <Route path="/login" render={ () => <LoginContainer /> } />
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isInitiation: state.app.isInitiation,
  }
}

export default compose(
  connect(mapStateToProps, { appInitiaton }),
  withRouter
)(App)
