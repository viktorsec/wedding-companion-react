import React from 'react';
import { Button, List, ListItem } from 'react-onsenui';
import FontAwesome from 'react-fontawesome';
import { googleAlbumUri } from './consts/Secret';

const photoCompetitionTopics = [
  '1. Žena bez topánok',
  '2. Niekto kto sa hrá na telefóne',
  '3. Niekto kto stojí sám vonku',
  '4. Čo najviac menovcov pokope',
  '5. Selfie s čiernym koreňom',
  '6. Driemajúci svadobčan',
  '7. Opité kočky',
  '8. Traja najvyšší ľudia pokope',
  '9. Nemá tvár',
  '10. Desať',
  '11. Spoločenstvo prsteňa',
  '12. Čo najviac ľudí pokope'
];

const PhotoCompetition = () => (
  <div className="container__center">
    <FontAwesome
        name='camera-retro'
        size='3x'
        style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '10px'}}
    />
    <h1 className="page__title">Témy</h1>
    <List
      dataSource={photoCompetitionTopics}
      renderRow={(row, i) => <ListItem key={i}>{row}</ListItem>}
    />
    <a href={googleAlbumUri} target="_blank">
      <Button modifier="large" className="button__large">
          Pridať fotku
      </Button>
    </a>
    <p>Nezabudnite pridať do popisu tému kategórie v ktorej so snímkou súťažíte.</p>
  </div>
);

export default PhotoCompetition;
