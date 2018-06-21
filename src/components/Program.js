import React from 'react';
import { List, ListItem } from 'react-onsenui';
import { schedule } from './consts/Schedule'

const Program = () => (
    <div>
      <h3 className="page__title">Program</h3>
      <List>
        { schedule.map((item, i) => (
            <ListItem key={i}>
                <div className="list-item__label">{ item.time }</div>
                { item.description }
            </ListItem>
        )) }
      </List>
    </div>
);

export default Program;
