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

  // Push pokemons
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  // Return pokemonList
  function getAll() {
    return pokemonList;
  }

  // addListItem() function and Event Listener to buttons
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click', function(pokemon) {
      showDetails(pokemon);
    });
  }

  // showDetails() function
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  // Return functions
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Wooper', height: 0.4, types: ['water', 'ground']});
console.log(pokemonRepository.getAll());

//forEach loop for IIFE pokemonRepository
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
