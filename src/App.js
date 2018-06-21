import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Page } from 'react-onsenui';
import Drinks from './components/Drinks';
import PhotoCompetition from './components/PhotoCompetition';
import Program from './components/Program';
import Navigation from './components/Navigation';
import Transport from './components/Transport';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './App.css';

const Home = () => <h1>Home</h1>;
const OtherPage = () => <h1>Other Page</h1>;

const App = () => (
  <HashRouter>
    <Page>
      <header className="App-header">
        Svadba
      </header>
      <Navigation />
      <div>
        <Route path="/drinks" component={Drinks} />
        <Route path="/photo-competition" component={PhotoCompetition} />
        <Route path="/program" component={Program} />
        <Route path="/transport" component={Transport} />
      </div>
    </Page>
  </HashRouter>
);

export default App;
