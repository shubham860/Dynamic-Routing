import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Shop from './Components/Shop'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/Nav' component={Nav}/>
        <Route path='/' exact component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Shop' component={Shop}/>
      </Router>
    </div>
  );
}

export default App;
