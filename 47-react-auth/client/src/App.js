import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Header from './components/Header'
import SignInForm from './components/SignInForm'
import Inventory from './components/Inventory'
import HomePage from './components/HomePage'
import PageNotFound from './components/PageNotFound'

import API from './API'

import './App.css'

class App extends Component {
  state = {
    username: ''
  }

  signin = (username, token) => {
    this.setState({ username })
    localStorage.setItem('token', token)
  }

  signout = () => {
    this.setState({ username: '' })
    localStorage.removeItem('token')
  }

  componentDidMount () {
    API.validate()  
      .then(data => {
        if (data.error) {
          this.props.history.push('/signin')
        } else {     
          this.signin(data.username, data.token)
          this.props.history.push('/inventory')
        }
      })

  }

  render() {
    const { signin, signout } = this
    const { username } = this.state
    return (
      <div className="App">
        <Header username={username} signout={signout} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={routerProps =>
            <SignInForm
              {...routerProps}
              signin={signin}

            />}
          />
          <Route path='/inventory' component={routerProps =>
            <Inventory {...routerProps} username={username} />
          }/>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)

/*
    {...routerProps} IS THE SAME AS:
    history={routerProps.history}
    match={routerProps.match}
    location={routerProps.location}
*/
