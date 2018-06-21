import React from 'react';
import { List, ListItem } from 'react-onsenui';

const Program = () => (
    <div>
      <h3 className="page__title">Program</h3>
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
    </div>
);

export default Program;
