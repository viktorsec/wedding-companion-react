import React from 'react';
import { Card } from 'react-onsenui';

const PhotoCard = () => (
	<Card>
		<img className="card-image" src="https://picsum.photos/600" />
		<div className="card-description">
			<span className="card-description-label">Alex</span>
			<span className="card-description-text">Skvelá fotka</span>
		</div>
	</Card>
);

export default PhotoCard;
