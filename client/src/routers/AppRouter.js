import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { history } from '../App'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import CallBack from '../components/auth/CallBack'
import NotFoundPage from '../components/NotFoundPage'
import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import SignupPage from '../components/SignupPage'
import ProfilePage from '../components/ProfilePage'
import SettingsPage from '../components/SettingsPage'

const handleAuth = (state, dispatch, client, auth, nextState) => {
  console.log('Auth callback initiating...')
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth().handleAuth(state, dispatch, client)
  }
}

class AppRouter extends Component {
  render() {
    const { state, dispatch, auth, client } = this.props
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute path="/" component={HomePage} exact={true} />
            <PublicRoute path="/login" component={LoginPage} />
            <PublicRoute path="/signup" component={SignupPage} />
            <Route path="/callback" render={props => {
              console.log('/callback called')
              handleAuth(state, dispatch, client, auth, props)
              return <CallBack {...props} />
            }} />
            <PublicRoute path="/profile/:userId" component={ProfilePage} />
            <PrivateRoute path="/settings" component={SettingsPage} />
            <PublicRoute component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({ state })

export default connect(mapStateToProps)(AppRouter)
