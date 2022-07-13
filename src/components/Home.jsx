import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../redux/actions';
import Cards from './Cards';
import '../styles/Home.css';
import Banner from './Banner';
import Loader from '../components/Loader'
import Paginado from './Paginado';
import SearchBar from './SearchBar.jsx';
import NotFound from './NotFound.jsx';
import '../styles/Nav.css';

export default function Home(){

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemones);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage, setPokemonPerPage] = useState(12);
    const [isLoading, setIsLoading] = useState(true);
    const indexLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexLastPokemon - pokemonPerPage;
    let currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexLastPokemon);

    useEffect(() => {
        dispatch(getPokemons());
    },[dispatch]);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect(()=>{
        setTimeout(()=> {
            setIsLoading(false);
        }, 1800);
    },[])

    function reloadPokemons(){
        dispatch(getPokemons());
    }

    return(
        <div className='homeContainer'>
            {isLoading ? <Loader/> : 
                <div className='cardsContainer'>
                    <Banner/>
                    <nav className='barra'>
                        <SearchBar reloadPokemons={reloadPokemons}/>
                    </nav>
                    <Paginado pokemonsPerPage={pokemonPerPage}
                            allPokemons={allPokemons.length}
                            paginado={paginado}
                    />
                    <div className='contenedorCards'>
                    {   
                        currentPokemons && currentPokemons.length === 0 ?
                        <NotFound/> :
                        currentPokemons?.map( p => {
                            return (
                                    <Fragment key={Math.random()}>                                
                                        <Cards 
                                            pokemon={p}
                                        />
                                    </Fragment>
                            )}
                        )
                    }
                    </div>
                </div>
            }
        </div>
    )
}