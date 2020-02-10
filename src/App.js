import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { appInitiaton } from "./redux/app-reducer";
import LoginContainer from "./components/Auth/LoginContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const CheckUser = ({ Component, isAuth }) => {
  if (!isAuth) return <LoginContainer />;
  return <Component />;
};

const App = ({ isAuth, appInitiaton, isInitiation }) => {
  useEffect(() => {
    appInitiaton();
  }, [appInitiaton]);

  return (
    <>
      {!isInitiation ? (
        <div>Loading...</div>
      ) : (
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBar />
          <div className="app-wrapper-content">
            <Route path="/profile/:userId?">
              <CheckUser isAuth={isAuth} Component={ProfileContainer} />
            </Route>
            <Route path="/dialogs">
              <CheckUser isAuth={isAuth} Component={DialogsContainer} />
            </Route>
            <Route path="/users">
              <CheckUser isAuth={isAuth} Component={UsersContainer} />
            </Route>
            <Route path="/login">
              <CheckUser isAuth={isAuth} Component={LoginContainer} />
            </Route>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ app: { isInitiation }, auth: { isAuth } }) => (
  {isAuth,isInitiation}
);

export default connect(mapStateToProps, { appInitiaton })(withRouter(App));
