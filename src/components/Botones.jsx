import React from "react";
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { getPokemons } from '../redux/actions';
import '../styles/Botones.css';

export default function Botones(){

    const dispatch = useDispatch();
    
    useEffect( () => {
        dispatch(getPokemons());
    }, [dispatch])

    return(
        <div className="botones">
            <Link to="/pokemons">
                <div className="typesPokemon pokemon" id="bulbasaur"></div>
            </Link>
            <Link to="/pokemons/newPokemons">
                <div className="pokemon" id="charmander"></div>
            </Link>
            <Link to="/types">
                <div className="typesPokemon pokemon" id="squirtle"></div>
            </Link>
            <Link to="/crearPokemon">
                <div className="formPokemon pokemon" id="pikachu"></div>
            </Link> 
        </div>
    )
}