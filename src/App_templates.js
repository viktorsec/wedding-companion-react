import React, { Component } from 'react';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './App.css';
import { Page, List, ListItem, Card } from 'react-onsenui';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const OtherPage = () => <h1>Other Page</h1>;

const App = () => (
  <Page className="App">
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

    <List>
      <ListItem tappable modifier="chevron">
        Program
      </ListItem>
      <ListItem tappable modifier="chevron">
        Nápojový lístok
      </ListItem>
      <ListItem tappable modifier="chevron">
        Fotosúťaž
      </ListItem>
      <ListItem tappable modifier="chevron">
        Doprava
      </ListItem>
    </List>

    <h3>Page / Program</h3>

    <List>
      <ListItem>
        <div className="list-item__label">13:00</div>
        Welcome drink
      </ListItem>
      <ListItem>
        <div className="list-item__label">14:00</div>
        Obrad
      </ListItem>
    </List>

    <h3>Page / Jedálny lístok</h3>

    <h4></h4>

    <Card>
      <h2 class="card__title">Vína</h2>
      Keďže svadba sa koná vo vinárstve, v prvom rade vám odporúčame vychutnať si domáce produkty. <strong>Ženích odporúča:</strong> Pre horúce letné dni je ideálnym vínom Pinot Noir rosé. Klasici si pochutnajú na Rieslingu.
    </Card>

    <List>
      <ListItem>
        Riesling (Biele, suché)
      </ListItem>
      <ListItem>
        Pálava 2 (Biele, polosladké)
      </ListItem>
      <ListItem>
        Pinot noir rosé (Ružové, suché)
      </ListItem>
      <ListItem>
        Dunaj (Červené, suché)
      </ListItem>
    </List>

    <Card>
      <h2 class="card__title">Tvrdé</h2>
      Dostupný je otvorený bar so širkou selekciou populárneho tvrdého alkoholu.
    </Card>

    <List>
      <ListItem>
        Absolut Vodka
      </ListItem>
      <ListItem>
        Jameson Irish Whiskey
      </ListItem>
      <ListItem>
        Spišská Borovička
      </ListItem>
      <ListItem>
        Bacardi Oakhart Rum
      </ListItem>
      <ListItem>
        Demänovka
      </ListItem>
      <ListItem>
        Aratat Brandy 5y
      </ListItem>
      <ListItem>
        Domáca svadobná marhuľovica dedka Šebíka
      </ListItem>
    </List>

    <Card>
      <h2 class="card__title">Iné</h2>
      Reštaurácia má otvorený bar, kde si môžete dať ďalšie nápoje, na ktoré by ste mali chuť, napríklad kávu alebo pivo.
    </Card>

    <h3>Page / Doprava</h3>
    <Card>
      <h2 class="card__title">Kyvadlová doprava</h2>
      Od 22:00 bude zabezpečená kyvadlová doprava dvomi vozidlami, registrovať na dopravu sa môžete u Viktora.
    </Card>
    <Card>
      <h2 class="card__title">Pre tých, čo vydržia</h2>
      O 4:00 príde autobus, ktorý odvezie do Bratislavy zvyšok.
    </Card>

  </Page>
);

export default App;
