import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import { Home, Form, Spin, Modal, Com } from './assembly'
export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/form" component={Form} />
          {/* <Route path="/spin" component={Spin} /> */}
          <Route path="/" component={Com} />
        </Switch>
      </BrowserRouter>
    )
  }
}
