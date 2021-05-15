// IIFE for pokemonList called pokemonRepository
let pokemonRepository = (function() {
// Pokemon repository list
  let pokemonList = [
    {
      name: 'Jigglypuff',
      height: 0.7,
      types: ['fairy', 'normal']
    },
    {
      name: 'Exeggcute',
      height: 0.4,
      types: ['psychic', 'grass']
    },
    {
      name: 'Mr. Mime',
      height: 1,
      types: ['psychic', 'fairy']
    }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Wooper', height: 0.4, types: ['water', 'ground']});
console.log(pokemonRepository.getAll());

//forEach loop to fetch information from new IIFE pokemonRepository
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
