import React from "react";
import '../styles/Banner.css';
import pokeLogo  from '../assets/pokeLogo.png';
import bulbasaur from '../assets/pokemonsBanner/bulbasaur.png';
import totodile from '../assets/pokemonsBanner/totodile.png';
import charmander from '../assets/pokemonsBanner/charmander.png';
import chikorita from '../assets/pokemonsBanner/chikorita.png';
import pikachu2 from '../assets/pokemonsBanner/pikachu2.png';
import squirtle from '../assets/pokemonsBanner/squirtle.png';
import cindaquyl from '../assets/pokemonsBanner/cindaquyl.png';
import { Link } from "react-router-dom";


export default function Banner(){    
    
    return(
        <div>
            <div className="contenedorBar">
                <div className="banner">
                    <Link to="/">
                        <img src={pokeLogo} alt="banner" className="imgBanner"/>
                    </Link>
                </div>
                <div className="containerSlider">
                    <img src={bulbasaur} alt="pikachu" className="pokebanner"/>
                    <img src={charmander} alt="pikachu" className="pokebanner"/>
                    <img src={squirtle} alt="pikachu" className="pokebanner"/>
                    <img src={pikachu2} alt="pikachu" className="pokebanner"/>
                    <img src={chikorita} alt="pikachu" className="pokebanner"/>
                    <img src={totodile} alt="pikachu" className="pokebanner"/>
                    <img src={cindaquyl} alt="pikachu" className="pokebanner"/>
                </div>
            </div>

        </div>
    )
}