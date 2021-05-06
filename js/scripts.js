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

//for loop to display Pokemon names and heights

for (let i = 0; i < repository.length; i++) {
  document.write(repository[i].name + ' (height: ' + repository[i].height + ')<br>');
}
