import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem } from 'react-onsenui';

class NavigationItem extends Component {
    render () {
        return (
            <NavLink to={this.props.to}>
                <ListItem tappable modifier="chevron">
                    {this.props.text}
                </ListItem>
            </NavLink>
        )
    }
}

const Navigation = () => (
    <List>
        <NavigationItem to="/program" text="Program" />
        <NavigationItem to="/drinks" text="Nápojový lístok" />
        <NavigationItem to="/photo-competition" text="Fotosúťaž" />
        <NavigationItem to="/transport" text="Doprava" />
    </List>
);

export default Navigation;
