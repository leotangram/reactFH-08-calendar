import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import LoginSreen from '../components/auth/LoginSreen'
import CalendarScreen from '../components/calendar/CalendarScreen'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginSreen} />
          <Route exact path="/" component={CalendarScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
