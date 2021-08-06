import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import IndexPage from './pages'
import DashboardPage from './pages/dashboard'

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <IndexPage/>
      </Route>
      <Route exact path="/dashboard">
        <DashboardPage/>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App
