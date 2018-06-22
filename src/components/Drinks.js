import React from 'react';
import { List, ListItem, Card } from 'react-onsenui';

const Drinks = () => (
    <div>
        <Card>
            <h2 className="card__title">Vína</h2>
            Keďže svadba sa koná vo vinárstve, v prvom rade vám odporúčame vychutnať si domáce produkty. <strong>Ženích odporúča:</strong> Pre horúce letné dni je ideálnym vínom Pinot Noir rosé. Klasici si pochutnajú na Rieslingu.
        </Card>

        <List>
            <ListItem>
            Riesling (Biele, suché)
            </ListItem>
            <ListItem>
            Pálava 2 (Biele, polosladké)
            </ListItem>
            <ListItem>
            Pinot noir rosé (Ružové, suché)
            </ListItem>
            <ListItem>
            Dunaj (Červené, suché)
            </ListItem>
        </List>

        <Card>
            <h2 className="card__title">Tvrdé</h2>
            Dostupný je otvorený bar so širokou selekciou populárneho tvrdého alkoholu.
        </Card>

        <List>
            <ListItem>
            Absolut Vodka
            </ListItem>
            <ListItem>
            Jameson Irish Whiskey
            </ListItem>
            <ListItem>
            Spišská Borovička
            </ListItem>
            <ListItem>
            Bacardi Oakhart Rum
            </ListItem>
            <ListItem>
            Demänovka
            </ListItem>
            <ListItem>
            Aratat Brandy 5y
            </ListItem>
            <ListItem>
            Domáca svadobná marhuľovica dedka Šebíka
            </ListItem>
        </List>

        <Card>
            <h2 className="card__title">Iné</h2>
            Reštaurácia má otvorený bar, kde si môžete dať ďalšie nápoje, na ktoré by ste mali chuť, napríklad kávu alebo pivo.
        </Card>
    </div>
);

export default Drinks;
