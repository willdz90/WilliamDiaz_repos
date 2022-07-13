import React from 'react';
import '../styles/LoaderPokemon.css';
import cargandopok from '../assets/cargandopok.gif';
import LoaderImage from '../assets/LoaderImage.png';

export default function LoaderPokemon() {
  return (
    <div className='loaderPokemon'>
        <img src={LoaderImage} alt="Loader" className='loaderImage'/>
        <img src={cargandopok} alt="loading"/>
    </div>
  )
}
