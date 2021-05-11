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

  function add(item) {
    pokemonList.push(item);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Wooper', height: 0.4, types: ['water', 'ground']});
console.log(pokemonRepository.getAll());

//forEach loop to fetch information from new IIFE pokemonRepository
pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height > 0.9 ) {
    document.write(pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s big!<br><br>');
  } else {
    document.write(pokemon.name + ' (height: ' + pokemon.height + ')<br><br>');
  }
});
