import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const OtherPage = () => <h1>Other Page</h1>;

const App = () => (
  <div className="App">
    <header className="App-header">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/other-page" component={OtherPage} />
        </div>
      </Router>
    </header>
    <p className="App-intro">
      Hey there. Go to the <a href="other-page">other page</a>. Pleb.
    </p>
  </div>
);

export default App;
