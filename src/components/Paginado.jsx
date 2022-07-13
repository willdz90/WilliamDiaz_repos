import React from 'react';
import '../styles/Paginado.css';

export default function Paginado({pokemonsPerPage, allPokemons, paginado}) {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(allPokemons / pokemonsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav className='contenedorPaginado'>
            <ul className='paginado'>{
                pageNumbers && pageNumbers.map(number => {
                    return(
                        <li className='number' key={number}>
                            <a onClick={() => paginado(number)} className="numberPage">{number}</a>
                        </li>
                    )
                })
            }
            </ul>
        </nav>
    )
}
