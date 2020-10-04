import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Landing from './Landing/Landing';
import {Reserve1, Reserve2, Reserve3, Reserve4, Reserve5} from './Reserve/Reserve';
import 'rmwc/dist/styles';




function App() {
  return (<BrowserRouter>
    <Switch>
    <Route path='/calendar/1' component={Reserve1} />
    <Route path='/calendar/2' component={Reserve2} />
    <Route path='/calendar/3' component={Reserve3} />
    <Route path='/calendar/4' component={Reserve4} />
    <Route path='/calendar/5' component={Reserve5} />
      <Route path='/' component={Landing} />
    </Switch>
  </BrowserRouter>);
};

export default App;
