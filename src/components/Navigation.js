import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-onsenui';

class NavigationItem extends Component {
    render () {
        const { isSelected } = this.props;
        return (
            <label className="tabbar__item">
              <NavLink to={this.props.to}>
                  <button className={
                      isSelected ? 'tabbar__button__pressed' : 'tabbar__button'
                  }>
                    <Icon icon={this.props.icon} className="tabbar__icon" />
                    <div className="tabbar__label">{this.props.text}</div>
                  </button>
              </NavLink>
            </label>
        )
    }
}

class Navigation extends Component {

    renderTabbar = (location) => (
        <div className="tabbar">
            <NavigationItem to="/program" text="Program" icon="fa-list"
                isSelected={location === '#/program'} />
            <NavigationItem to="/drinks" text="Nápojový lístok" icon="fa-glass"
                isSelected={location === '#/drinks'} />
            <NavigationItem to="/photo-competition" text="Fotosúťaž" icon="fa-star"
                isSelected={location === '#/photo-competition'} />
            <NavigationItem to="/transport" text="Doprava" icon="fa-bus"
                isSelected={location === '#/transport'} />
            <NavigationItem to="/help" text="Pomoc" icon="fa-life-ring"
                isSelected={location === '#/help'} />
        </div>
    )

    render () {
        const location = window.location.hash;
        
        return (
            <div>
                {
                    location === '' || location === '#/'
                    ? null
                    : this.renderTabbar(location)
                }
            </div>
        )
    }
};

export default Navigation;
