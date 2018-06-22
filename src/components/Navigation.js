import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, Icon } from 'react-onsenui';

class NavigationItem extends Component {
    render () {
        return (
            <label className="tabbar__item">
              <NavLink to={this.props.to}>
                  <button className="tabbar__button">
                    <Icon icon={this.props.icon} className="tabbar__icon" />
                    <div className="tabbar__label">{this.props.text}</div>
                  </button>
              </NavLink>
            </label>
        )
    }
}

const Navigation = () => (
    <div className="tabbar">
      <NavigationItem to="/program" text="Program" icon="fa-list" />
      <NavigationItem to="/drinks" text="Nápojový lístok" icon="fa-glass" />
      <NavigationItem to="/photo-competition" text="Fotosúťaž" icon="fa-star" />
      <NavigationItem to="/transport" text="Doprava" icon="fa-bus" />
      <NavigationItem to="/help" text="Pomoc" icon="fa-life-ring" />
    </div>
);

export default Navigation;
