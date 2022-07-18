import React, {Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../redux/actions";
import { es } from '../i8n.js';
import '../styles/Nav.css';

export default function SearchBar({reloadPokemons}) {

  const [pokemonName, setPokemonName] = useState('');
  const [ errors, setErrors ] = useState({name : ''})
  const dispatch = useDispatch();

  function searchP(name){
    dispatch(getPokemonByName(name))
  }

  function validateInput(value){
    let errores = {};
    if(value===''){
      errores.name = "Debes ingresar un nombre";
    }
    return errores;
  }

  function captureValue(e){
    setPokemonName(e.target.value.toLowerCase())
    setErrors(validateInput(e.target.value))
  }

  return (
    <Fragment>
      <form onSubmit={(e) => {
        e.preventDefault();
        searchP(pokemonName);
        setPokemonName("");
        setErrors({name : ''})
      }}>
        <input
          type="text"
          placeholder="Busqueda pokemon..."
          id="casilla"
          onChange={(e) => captureValue(e)}
          value={pokemonName}
        />
        <input type="submit" value="Buscar en pokedex" id="btnAdd" disabled={Object.keys(errors).length === 0 ? false : true}/>
        { errors && errors.name ? <span className="errores">{es.MENSAJES_DE_ERRORES.NO_POKEMON_NAME}</span> : null}
      </form>
        <button id="btnReload" onClick={reloadPokemons}>{es.BOTONES.CARGAR_POKEMONES}</button> 
    </Fragment>
  );
}