import React, {Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../redux/actions";
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
    setPokemonName(e.target.value)
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
        { errors && errors.name ? <span className="errores">DEBES INGRESAR UN NOMBRE</span> : null}
      </form>
        <button id="btnReload" onClick={reloadPokemons}>Cargar Pokemons</button> 
    </Fragment>
  );
}