import React from 'react';
import { NavLink } from 'react-router-dom';

const Gdpr = () => (
    <div>
        <ul>
            <li>Záleží nám na vašom súkromí aj na GDPR, takže nebudeme zbierať vaše dáta, iba tie, ktoré potrebujeme na nevyhnutný chod tejto webovej aplikácie.</li>
            <li>Používame sledovacie technológie, ktoré vás dokážu zamerať na presnosť 3 metre a zhromaždujú informácie o vašich rodinných príslušníkoch, slabých stránkach a osobných problémoch, aby sme mohli analyzovať tieto dáta, porozumieť lepšie našim používateľom a zlepšiť ich zážitok. Ak nesúhlasíte so zbieraním týchto dát, môžete upraviť vaše nastavenia vo svojom profile.</li>
            <li>Všimli sme si, že používate AdBlock. Fungujeme aj vďaka príjmom z reklamy. Podporte nás povolením reklamy na našej stránke.</li>
            <li>Prihláste sa do nášho newslettera, budeme vám posielať novinky najvyššej kvality.</li>
            <li>Tiež neznášame spam, budeme vám preto posielať email maximálne raz za deň.</li>
            <li>Používame súbory cookies na zlepšenie vášho zážitku. Keď si chcete vypnúť cookies, odpojte sa od internetu.</li>
        </ul>
        <NavLink to="/program">
            Akceptujem
        </NavLink>
    </div>
);

export default Gdpr;
