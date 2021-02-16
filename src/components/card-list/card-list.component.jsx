import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => (
    <div className='card-list'>{
        props.anime.map(anime => (
            <Card key={anime.mal_id} item={
                {
                    imageUrl: anime.image_url,
                    title: anime.title,
                    desc: anime.genres.slice(0, 3).map((g) => g.name).join(', '),
                    handleClick: () => window.open(anime.url)
                }
            }/>
        ))
    }</div>
);
