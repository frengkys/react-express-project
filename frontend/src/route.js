import React from 'react'
import { BrowserRouter, Switch, Route, Router  } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from './container/Home'
import About from './container/About'
import Coba from './container/Coba'

const customHistory = createBrowserHistory()

const Main = props => (
    <Router {...props} history={customHistory}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/coba" component={Coba} />
        </Switch>
    </Router>
  );
  
  export default Main;