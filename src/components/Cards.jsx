import React, { useState } from "react";
import '../styles/Cards.css';
import pokeball from '../assets/pokeball.png';
import { Link } from "react-router-dom";
import { getSrcImage } from '../functions/getSrcImage.js';

export default function Cards(pokemon){

    const [ poke, setPoke ] = useState(pokemon);

    return(
            <Link to={`/pokemons/${poke.pokemon.id}`}>
                <div className="flip-card">
                        <div className="nombrePokemon">{poke.pokemon.nombre.toUpperCase()}</div>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={pokeball} alt={poke.pokemon.nombre} className="imgPokeFront"/>
                            </div>
                            <div className="flip-card-back">
                                <div className="contenedorBack">
                                    <img src={getSrcImage(poke.pokemon.imagen)} alt={poke.pokemon.nombre} className="imgPokeBack"/>
                                </div>
                            </div>
                        </div>
                </div>
            </Link>
    )
}