import React from 'react';
import PhotoCard from './PhotoCard';
import { List, ListItem } from 'react-onsenui';

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
  <div>
    <h3 className="page__title">Témy</h3>
    <List
      dataSource={photoCompetitionTopics}
      renderRow={(row) => <ListItem>{row}</ListItem>}
    />
    <h3 className="page__title">Fotky</h3>
    <PhotoCard></PhotoCard>
  </div>
);

export default PhotoCompetition;
