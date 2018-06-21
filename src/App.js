import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Page, Toolbar } from 'react-onsenui';
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
      <Toolbar>
        <div className='left'>
        </div>
        <div className='center'>Svadba</div>
        <div className='right'>
          <label class="switch">
            <input type="checkbox" className="switch__input" />
            <div className="switch__toggle">
              <div className="switch__handle"></div>
            </div>
          </label>
        </div>
      </Toolbar>
      <Navigation style={{paddingTop: '100px'}} />
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
