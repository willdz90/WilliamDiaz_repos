import React from 'react';
import '../styles/Loader.css';
import simple_pokeball from '../assets/simple_pokeball.gif';

export default function Loader(){
  return (
    <div className='loader'>
        <img src={simple_pokeball} alt="loading" className='loaderImage'/>
    </div>
  )
}
