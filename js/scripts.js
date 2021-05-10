// Pokemon repository list
let repository = [
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

//forEach loop to Pokemonr epository
repository.forEach(function(pokemon) {
  if (pokemon.height > 0.9 ) {
    document.write(pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s big!<br><br>');
  } else {
    document.write(pokemon.name + ' (height: ' + pokemon.height + ')<br><br>');
  }
});
