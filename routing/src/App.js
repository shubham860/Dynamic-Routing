import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Shop from './Components/Shop'
import Home from './Components/Home'
import Nav from './Components/Nav'
import About from './Components/About'
import Item from './Components/Item'


function App() {
  return (
   <Router>
      <div className="App">
        <br></br><br/><br/><br/>
          <Nav />
          <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Shop' exact component={Shop}/>
          <Route path='/Shop/:id' component={Item}/>
          </Switch>
      </div>
   </Router>
  );
}


export default App;
