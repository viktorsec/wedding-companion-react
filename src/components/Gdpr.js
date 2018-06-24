import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Page } from 'react-onsenui';
import FontAwesome from 'react-fontawesome';
import { googleAlbumUri } from './consts/Secret';

const Gdpr = () => (
    <div>
        <Page style={{color: '#021433'}}>
            <div className="container__center" style={{paddingTop: '40px'}}>
                <FontAwesome
                    name='heart'
                    size='5x'
                    style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '10px'}}
                />
                <h1 style={{paddingTop: '30px'}}>Ste úžasní. Ďakujeme.</h1>
                <div style={{paddingTop: '20px'}}>
                    <a href={googleAlbumUri} target="_blank">
                        <Button modifier="large" className="button__large">
                            Fotoalbum
                        </Button>
                    </a>
                    <NavLink to="/program">
                        <Button modifier="large" className="button__large">Pokračovať do aplikácie</Button>
                    </NavLink>
                </div>
            </div>
        </Page>
    </div>
);

export default Gdpr;
