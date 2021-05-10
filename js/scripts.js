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

// IIFE for pokemonList called pokemonRepository
let pokemonRepository = (function() {
  let pokemonList = [];

  function add() {
    pokemonList.push(item);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
});

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Charmander'});
console.log(pokemonRepository.getAll());

//forEach loop to display name & height from Pokemon repository list
pokemonList.forEach(function getAll(pokemon) {
  if (pokemon.height > 0.9 ) {
    document.write(pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s big!<br><br>');
  } else {
    document.write(pokemon.name + ' (height: ' + pokemon.height + ')<br><br>');
  }
});
