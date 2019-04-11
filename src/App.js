import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import NavBarComponent from './components/NavBarComponent';
import DashBoardScreen from './screens/DashBoardScreen';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <NavBarComponent/>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/dashboard" component={DashBoardScreen} />
        <Route exact path="/user" component={UserScreen} />
        <Route path="/user/:id" component={UserScreen} />
      </Router>



      </div>
    );
  }
}

export default App;
