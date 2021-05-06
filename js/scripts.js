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
  if (repository[i].height > 0.9 ) {
    document.write(repository[i].name + ' (height: ' + repository[i].height + ') - Wow, that\'s big!<br><br>')
  } else {
    document.write(repository[i].name + ' (height: ' + repository[i].height + ')<br><br>');
  }
}
