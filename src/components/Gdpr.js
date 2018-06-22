import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Page } from 'react-onsenui';
import FontAwesome from 'react-fontawesome';

const Gdpr = () => (
    <div>
        <Page style={{color: '#021433'}}>
            <div className="container__center">
                <FontAwesome
                    name='eye'
                    size='5x'
                    style={{marginLeft: 'auto', marginRight: 'auto', paddingTop: '10px'}}
                />
                <h1>GDPR</h1>
            </div>
            <ul style={{width: '80%', textAlign: 'justify'}} className="gdpr">
                <li>Záleží nám na vašom súkromí aj na Európskom všeobecnom nariadení o ochrane osobných údajov, takže nebudeme zbierať vaše dáta, iba tie, ktoré potrebujeme na nevyhnutný chod tejto webovej aplikácie.</li>
                <li>Používame sledovacie technológie, ktoré vás dokážu zamerať na presnosť 3 metre a zhromaždujú informácie o vašich rodinných príslušníkoch, slabých stránkach a osobných problémoch, aby sme mohli analyzovať tieto dáta, porozumieť lepšie našim používateľom a zlepšiť ich zážitok. Ak nesúhlasíte so zbieraním týchto dát, môžete upraviť vaše nastavenia vo svojom profile.</li>
                <li>Všimli sme si, že používate AdBlock. Fungujeme aj vďaka príjmom z reklamy. Podporte nás povolením reklamy na našej stránke.</li>
                <li>Prihláste sa do nášho newslettera, budeme vám posielať novinky najvyššej kvality.</li>
                <li>Tiež neznášame spam, budeme vám preto posielať email maximálne raz za deň.</li>
                <li>Používame súbory cookies na zlepšenie vášho zážitku. Keď si chcete vypnúť cookies, odpojte sa od internetu.</li>
            </ul>
            <div className="container__center">
                <FontAwesome
                    name='thumbs-up'
                    size='5x'
                    spin
                    style={{padding: '20px'}}
                />
                <NavLink to="/program">
                    <Button modifier="large" className="button__large">Akceptujem</Button>
                </NavLink>
            </div>
        </Page>
    </div>
);

export default Gdpr;
