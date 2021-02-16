import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container' onClick={ props.item.handleClick } >
        <div className='card-image' style={ {backgroundImage: `url(${props.item.imageUrl})`} }></div>
        <div className='card-title'> { props.item.title } </div>
        <div className='card-desc'> { props.item.desc } </div>
    </div>
);
