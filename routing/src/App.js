import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Shop from './Components/Shop'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'


function App() {
  return (
   <Router>
      <div className="App">
          <Nav />
          <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Shop' component={Shop}/>
          </Switch>
      </div>
   </Router>
  );
}

export default App;
// 7299d8feb2f5eadccc6c8b0efadeddd9
// https://fortnite-api.theapinetwork.com/upcoming/get/header:%20%7B'Authorization':'7299d8feb2f5eadccc6c8b0efadeddd9'%7D
