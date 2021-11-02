import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';

const beerDetails = {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    paddingBottom: '3rem'
}

const headerStyles = {
    display: 'flex'
}

const likeBtn = {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer'
}

const likeBtnIconSolid = {
    color: 'orange',
}

const likeBtnIconOutline = {
    color: 'orange'
}

function Beers(props) {
    return (
        <ul>
            {props.beers.map(beer => (
                <li style={beerDetails} key={beer.id}>
                    <img src={beer.image_url} alt={beer.name} />
                    <article>
                        <header style={headerStyles}>
                            <h2>{beer.name}</h2>
                            {/* If the beer is liked, show a filld in heart icon
                            If the beer is not liked show a heart outline icon */}
                            <button style={likeBtn} onClick={() => {props.handleLike(beer.id)}}>
                                <FontAwesomeIcon 
                                    icon={props.likedBeers.includes(beer.id) ? faHeart : faHeartOutline} 
                                    style={props.likedBeers.includes(beer.id) ? likeBtnIconSolid : likeBtnIconOutline} />
                            </button>
                        </header>
                        <p><em>{beer.tagline}</em></p>
                        <p><strong>ABV:</strong> {beer.abv}</p>
                        <p><strong>IBU:</strong> {beer.ibu}</p>
                        <p><strong>Description:</strong> {beer.description}</p>
                        <p><strong>Malts:</strong></p>
                        <ul>
                            {beer.ingredients.malt.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient.name} - {ingredient.amount.value} {ingredient.amount.unit}
                                </li>
                            ))}
                        </ul>
                        <p><strong>Food Pairing:</strong></p>
                        <ul>
                            {beer.food_pairing.map((pairing, index) => (
                                <li key={index}>
                                    {pairing}
                                </li>
                            ))}
                        </ul>
                    </article>
                </li>
            ))}
        </ul>
    )
}

export default Beers;