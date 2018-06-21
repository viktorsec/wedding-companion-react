import React from 'react';
import { List, ListItem } from 'react-onsenui';
import { schedule } from './consts/Schedule'

const Program = () => (
  <div>
    <h3 className="page__title">Program</h3>
      <List
        dataSource={schedule}
        renderRow={(item, i) => (
          <ListItem key={i}>
            <div className="list-item__label">{ item.time }</div>
              { item.description }
          </ListItem>
        )}
      />
  </div>
);

export default Program;
