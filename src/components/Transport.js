import React from 'react';
import { Card } from 'react-onsenui';
import FontAwesome from 'react-fontawesome';

const Transport = () => (
    <div>
        <div className="container__center">
            <FontAwesome
                name='bicycle'
                size='5x'
                style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '10px'}}
            />
        </div>
        <Card>
        <h2 className="card__title">Kyvadlová doprava</h2>
        Od 22:00 bude zabezpečená kyvadlová doprava dvomi vozidlami, registrovať na dopravu sa môžete u Viktora.
        </Card>
        <Card>
        <h2 className="card__title">Pre tých, čo vydržia</h2>
        O 4:00 príde autobus, ktorý odvezie do Bratislavy zvyšok.
        </Card>
    </div>
);

export default Transport;
