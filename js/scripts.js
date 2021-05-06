let pokemonList = [
  {name: 'Jigglypuff', height: 7, types: ['fairy', 'normal']},
  {name: 'Exeggcute', height: 4, types: ['psychic', 'grass']},
  {name: 'Mr. Mime', height: 10, types: ['psychic', 'fairy']}
];
console.log(pokemonList);

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 8 && pokemonList[i].height > 5) {
    document.write(pokemonList.name + pokemonList.height);
  } else if (pokemonList[i].height < 5) {
    document.write(pokemonList.name + pokemonList.height);
  } else {
    document.write(pokemonList.name + pokemonList.height);
    }
}
