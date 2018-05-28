import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Routers from './router';

import Home from './views';

class App extends Component {
  render() {
    return (
        <Router> 
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>                
                <Routers></Routers>
            </div>            
        </Router>  
    );
  }
}

export default App;
