import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Task from './Components/Task/Task';
import User from './Components/User/User';

const Routes = () => {

  var ccc,sss;
  const bbb = localStorage.getItem("userdetail");
  if (localStorage.hasOwnProperty("userdetail")) {
    ccc = JSON.parse(bbb)
    if(ccc.hasOwnProperty('uname') !== null){
      sss = ccc.hasOwnProperty('uname');
    }
  }

  const Verifed = () => {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/task" component={Task} />
        <Route exact path="/user" component={User} />
        <Redirect to="/home" />
      </Switch>
    )
  }
  const NotVerified = () => {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <>
      {
        sss ? <Verifed /> : <NotVerified />
      }
    </>
  )
}

export default Routes
