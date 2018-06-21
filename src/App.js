import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Drinks from './components/Drinks';
import PhotoCompetition from './components/PhotoCompetition';
import Program from './components/Program';
import Transport from './components/Transport';
import './App.css';

const Home = () => <h1>Home</h1>;
const OtherPage = () => <h1>Other Page</h1>;

const App = () => (
  <HashRouter>
    <div className="App">
      <header className="App-header">
        Svadba
      </header>
        <div>
          <Route path="/drinks" component={Drinks} />
          <Route path="/photo-competition" component={PhotoCompetition} />
          <Route path="/program" component={Program} />
          <Route path="/transport" component={Transport} />
        </div>
      <p className="App-intro">
        <ul>
          <li><NavLink to="/program">Program</NavLink></li>
          <li><NavLink to="/drinks">Nápoje</NavLink></li>
          <li><NavLink to="/photo-competition">Fotosúťaž</NavLink></li>
          <li><NavLink to="/transport">Doprava</NavLink></li>
        </ul>
      </p>
    </div>
  </HashRouter>
);

export default App;
