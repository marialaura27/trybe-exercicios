import React from 'react';
import Pokemon from './Pokemon'
import pokemonsData from './data';

class Pokedex extends React.Component {
    render() {
        return (
        <div>
            {pokemonsData.map(pokemon => <Pokemon data={pokemon} />)}
        </div>
        )
        
    }
}


export default Pokedex;