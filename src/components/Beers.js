import React from 'react';

function Beers(props) {
    return (
        <ul>
            {props.beers.map(beer => (
                <li key={beer.id}>
                    <img src={beer.image_url} alt={beer.name} />
                    <p>{beer.name}</p>
                    <button>Like Btn</button>
                </li>
            ))}
        </ul>
    )
}

export default Beers;