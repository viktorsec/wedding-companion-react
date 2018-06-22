import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import classnames from 'classnames';
import { Page, Toolbar } from 'react-onsenui';
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

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      'australia': false,
      'comicScript': false,
      'reverse': false,
      'transparent': false,
    };
  }

  doMagic() {
    const metaOrb = Math.random() * 100;
    const { state } = this;

    if (metaOrb < 90) {
      return;
    }
    if (metaOrb < 92) {
      this.setState({
        'australia': !state.australia,
      })
      return;
    }
    if (metaOrb < 94) {
      this.setState({
        'comicScript': !state.comicScript,
      });
      return;
    }
    if (metaOrb < 96) {
      this.setState({
        'reverse': !state.reverse,
      });
      return;
    }
    if (metaOrb < 98) {
      this.setState({
        'transparent': !state.transparent,
      });
      return;
    }
  }

  render () {
    const { australia, comicScript, reverse, transparent } = this.state;
    var pageClassNames = classnames({
      australia,
      comicScript,
      reverse,
      transparent,
    });

    return (
      <HashRouter>
        <Page className={pageClassNames}>
          <Toolbar>
            <div className='left'>
            </div>
            <div className='center'>Svadba</div>
            <div className='right'>
              <label className="switch" style={{margin: '6px'}} onClick={() => this.doMagic()}>
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
    )
  } 
}

export default App;
