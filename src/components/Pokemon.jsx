import React from 'react';
import LoaderPokemon from './LoaderPokemon.jsx';
import Banner from './Banner.jsx';
import { useState, useEffect } from 'react';
import { getSrcImage } from '../functions/getSrcImage.js';
import { useParams } from 'react-router';
import { getPokemonInfoById } from '../functions/getInfo.js'
import '../styles/Pokemon.css';

export default function Pokemon() {

    let { pokemonId } = useParams();

    const [ pokemonInfo, setPokemonInfo ] = useState();
    const [loadingPokemon, setLoadingPokemon] = useState(true);

    console.log(pokemonInfo);

    useEffect(() => {
        async function getInfoPokemon(){
            let response = await getPokemonInfoById(pokemonId);
            setPokemonInfo(response)
        }
        getInfoPokemon();
    }, [pokemonId])

    useEffect(()=>{
        setTimeout(()=> {
            setLoadingPokemon(false);
        }, 1000)
    })

    return (
        <div className='contenedorPokemon'>
            <Banner/>
            {   
                loadingPokemon === true ? <LoaderPokemon /> :
                <div className='pokeMain'>
                    
                    {
                        pokemonInfo?.map(p => {
                            return (
                                <div className='pokemonContainer' key={p.id}>
                                <div className='nombrePoke'>{ p.nombre.toUpperCase() } </div>
                                    <div className='pokemonCatched'>
                                        <div className='containerImgPoke'>
                                            <img src={getSrcImage(p.imagen)} alt={p.nombre} className="imgPokemonDetail"/>    
                                        </div>
                                        <div className='infoPokemon'>
                                            <h5>ID: #{p.id}</h5>
                                            <h5>Tipo 1: {p.tipo}</h5>
                                            {p.tipo2 && p.tipo2 !== null ? <h5>Tipo 2: {p.tipo2}</h5> : null}
                                            <h5>Peso: {p.peso} kg</h5>
                                            <h5>Movimientos: {p.movimientos?.slice(0,4).map(m => {
                                                return(
                                                    <p>{m.move.name}</p>
                                                )
                                            })}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='pokemonContainer'>
                        {
                            pokemonInfo?.map( p => {
                                return(
                                    <div className='containerSprites'>
                                        <img className='imgSprite' src={p.sprites.front_default} alt="front default"></img>
                                        <img className='imgSprite' src={p.sprites.front_shiny} alt="front default"></img>
                                        <img className='imgSprite' src={p.sprites.other.dream_world.front_default} alt="front default"></img>
                                        <img className='imgSprite' src={p.sprites.other.home.front_default} alt="front default"></img>
                                        <img className='imgSprite' src={p.sprites.versions['generation-i']['red-blue'].front_default} alt="front default"></img>
                                        <img className='imgSprite' src={p.sprites.versions['generation-ii']['crystal'].front_default} alt="front default"></img>
                                        <img className='imgSprite' src={p.sprites.versions['generation-iii']['emerald'].front_default} alt="front default"></img>
                                        <img className='imgSprite' src={p.sprites.versions['generation-iv']['diamond-pearl'].front_default} alt="front default"></img>
                                        <img className='imgSprite' src={p.sprites.versions['generation-v']['black-white'].front_default} alt="front default"></img>
                                        <img className='imgSprite' src={p.sprites.versions['generation-vi']['x-y'].front_default} alt="front default"></img>
                                        <img className='imgSprite' src={p.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default} alt="front default"></img>
                                        <img className='imgSprite' src={p.sprites.versions['generation-viii']['icons'].front_default} alt="front default"></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
            }
        </div>
    )
}
