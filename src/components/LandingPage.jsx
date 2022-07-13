import React from 'react';
import { Link } from 'react-router-dom';
import pokeLogo from '../assets/pokeLogo.png';
import '../styles/LandingPage.css';
import ReactPlayer from 'react-player';

export default function LandingPage(){

    return(
        <div className='principal'>
            <div className='tituloPrincipal'>
                <div>
                    <img src={pokeLogo} alt="titulo"/>
                </div>
                <div>
                    <Link to='/pokemons'>
                        <button className='imgPokeLogo'>Empezar busqueda</button>
                    </Link>
                </div>
            </div>
            <div className='reproductor'>
                <ReactPlayer
                    muted={true}
                    className="video"
                    url={require('../assets/videos/firev.mp4')}
                    playing={true}
                    loop={true}
                    volume={0.18}
                    controls={true}
                    margin="0 auto"
                />
            </div>
        </div>
    )
}