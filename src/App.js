import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import Home from './components/Home/Home'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'

import Navigation from './components/Navbar/Navigation'

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
