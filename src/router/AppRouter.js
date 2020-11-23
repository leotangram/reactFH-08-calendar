import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { startChecking } from '../actions/auth'
import LoginSreen from '../components/auth/LoginSreen'
import CalendarScreen from '../components/calendar/CalendarScreen'

const AppRouter = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startChecking())
  }, [])

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
