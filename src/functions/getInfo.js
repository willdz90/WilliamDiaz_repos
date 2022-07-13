const axios = require('axios');

export const getAllInfo = async (name) => {
  try {
    if(name){
      let listPokemones = [];
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokemon = response.data;
      listPokemones.push({
        id: pokemon.id,
        imagen: pokemon.sprites.other.home.front_default,
        nombre : pokemon.name.toUpperCase(),
        vida: pokemon.stats[0].base_stat,
        fuerza: pokemon.stats[1].base_stat,
        defensa: pokemon.stats[2].base_stat,
        velocidad: pokemon.stats[5].base_stat,
        altura : pokemon.height,
        peso : pokemon.weight,
        tipo1 : pokemon.types[0].type.name,
      })

      return listPokemones;
    }else{
      let listPokemones = [];
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      let respuesta = await response.data.results;
      const nextPage = await axios.get(response.data.next);
      let infoNextPage = nextPage.data.results;
      respuesta = respuesta.concat(infoNextPage);
      for(let pokemon of respuesta){
        await axios.get(pokemon.url).then(
          (infoPokemon) => {
            let tipo2;
            if(infoPokemon.data.types[1] !== undefined){
              tipo2 = infoPokemon.data.types[1];
            }else{
              tipo2 = null;
            }
            listPokemones.push({
                    id: infoPokemon.data.id,
                    imagen: infoPokemon.data.sprites.other.home.front_default,
                    nombre : infoPokemon.data.name.toUpperCase(),
                    vida: infoPokemon.data.stats[0].base_stat,
                    fuerza: infoPokemon.data.stats[1].base_stat,
                    defensa: infoPokemon.data.stats[2].base_stat,
                    velocidad: infoPokemon.data.stats[5].base_stat,
                    altura : infoPokemon.data.height,
                    peso : infoPokemon.data.weight,
                    tipo1 : infoPokemon.data.types[0].type.name,
                    tipo2 : tipo2
                  })
          }
        )
      }
      return listPokemones;
    }
  } catch (error) {
    console.log(error.message)
    return [];
  }
    
};


export const getPokemonInfoById = async (pokemonId) => {

  let pokemon = [];
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const pokeData = response.data;
  const tipo2 = pokeData && pokeData.types.length > 1 ? pokeData.types[1].type.name : null;
  pokemon.push({
    id : pokeData.id,
    nombre : pokeData.name,
    imagen : pokeData.sprites.other.home.front_default,
    tipo : pokeData.types[0].type.name,
    tipo2 : tipo2,
    peso : pokeData.weight,
    sprites : pokeData.sprites,
    movimientos : pokeData.moves
  })

  return pokemon
}