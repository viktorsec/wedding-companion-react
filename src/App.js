import React from 'react';
import { Route, HashRouter, withRouter } from 'react-router-dom';
import { Page } from 'react-onsenui';
import Drinks from './components/Drinks';
import Gdpr from './components/Gdpr';
import PhotoCompetition from './components/PhotoCompetition';
import Program from './components/Program';
import Navigation from './components/Navigation';
import Transport from './components/Transport';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './App.css';


const App = () => (
  <HashRouter>
    <Page>
      <header className="App-header">
        Svadba
      </header>
        <Route path="/drinks" component={Navigation} />
        <Route path="/photo-competition" component={Navigation} />
        <Route path="/program" component={Navigation} />
        <Route path="/transport" component={Navigation} />
      <div>
        <Route exact path="/" component={Gdpr} />
        <Route path="/drinks" component={Drinks} />
        <Route path="/photo-competition" component={PhotoCompetition} />
        <Route path="/program" component={Program} />
        <Route path="/transport" component={Transport} />
      </div>
    </Page>
  </HashRouter>
);

export default App;
