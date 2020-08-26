import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import LoginContainer from './components/Auth/LoginContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import NavBar from './components/NavBar/NavBar'

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <>
                <HeaderContainer />
                <NavBar />
                <Switch>
                    <Route path="/profile/:userId?" exact>
                        <ProfileContainer />
                    </Route>
                    <Route path="/dialogs" exact>
                        <DialogsContainer />
                    </Route>
                    <Route path="/users" exact>
                        <UsersContainer />
                    </Route>
                    <Redirect to="/dialogs" />
                </Switch>
            </>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <LoginContainer />
            </Route>
            <Redirect to="/" />
        </Switch>
    )

}