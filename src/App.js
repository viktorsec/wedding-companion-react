import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Page, Toolbar, Tabbar, Icon } from 'react-onsenui';
import Drinks from './components/Drinks';
import Gdpr from './components/Gdpr';
import PhotoCompetition from './components/PhotoCompetition';
import Program from './components/Program';
import Navigation from './components/Navigation';
import Transport from './components/Transport';
import Help from './components/Help';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './App.css';


const App = () => (
  <HashRouter>
    <Page>
      <Toolbar>
        <div className='left'>
        </div>
        <div className='center'>Svadba</div>
        <div className='right'>
          <label className="switch">
            <input type="checkbox" className="switch__input" />
            <div className="switch__toggle">
              <div className="switch__handle"></div>
            </div>
          </label>
        </div>
      </Toolbar>
      <div>
        <Route path="/drinks" component={Navigation} />
        <Route path="/photo-competition" component={Navigation} />
        <Route path="/program" component={Navigation} />
        <Route path="/transport" component={Navigation} />
        <Route path="/help" component={Navigation} />
      </div>
      <div>
        <Route exact path="/" component={Gdpr} />
        <Route path="/drinks" component={Drinks} />
        <Route path="/photo-competition" component={PhotoCompetition} />
        <Route path="/program" component={Program} />
        <Route path="/transport" component={Transport} />
        <Route path="/help" component={Help} />
      </div>

    </Page>
  </HashRouter>
);

export default App;
