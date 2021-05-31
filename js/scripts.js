// IIFE for pokemonList called pokemonRepository
let pokemonRepository = (function() {
  // Pokemon repository list
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Push pokemons
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
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
    let pokemonList = document.querySelector('.list-group');
    let listPokemon = document.createElement('li');
    listPokemon.classList.add('list-group-item');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-block');
    button.setAttribute('data-target', '#pokemonModal', 'data-toggle', 'modal');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  // Fetch pokemon list from API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  // Fetch pokemon details from API
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      return {
        name: pokemon.name,
        height: pokemon.height,
        imageUrl: details.sprites.front_default,
        height: details.height,
        types: [...details.types]
      }
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function (pokemon) {
      let modalBody = $('.modal-body');
      let modalTitle = $('.modal-title');

      modalTitle.empty();
      modalBody.empty();

      let nameElement = $('<h1>' + pokemon.name + '</h1>');
      let imageElement = $('<img class="modal-img" style="width:50%">');
      imageElement.attr('src', pokemon.imageUrl);
      let heightElement = $('<p>' + 'Height : ' + pokemon.height + '</p>');
      let typeElement = document.createElement('span');
      let types = 'Types: ';
      pokemon.types.forEach(function(item) {
        types += item.type.name + ' ';
      });
      typeElement.innerHTML = types;

      modalTitle.append(nameElement);
      modalBody.append(imageElement);
      modalBody.append(heightElement);
      modalBody.append(typeElement);

      $('#pokemonModal').modal('toggle');
    });
  }
  
  // Return functions
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

//forEach loop for IIFE pokemonRepository
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
