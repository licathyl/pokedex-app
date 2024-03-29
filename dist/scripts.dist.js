let pokemonRepository = (function() {
  let t = [];
  const e = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function n(e) {
    'object' == typeof e && 'name' in e && 'detailsUrl' in e
      ? t.push(e)
      : console.log('pokemon is not correct');
  }
  function o(t) {
    pokemonRepository.loadDetails(t).then(function(t) {
      let e = $('.modal-body'),
        n = $('.modal-title');
      n.empty(), e.empty();
      let o = $('<h1>' + t.name + '</h1>'),
        i = $('<img class="modal-img" style="width:50%">');
      i.attr('src', t.imageUrl);
      let a = $('<p>Height : ' + t.height + '</p>'),
        l = document.createElement('span'),
        c =
          'Types: ' +
          t.types
            .map(function(t) {
              return t.type.name;
            })
            .join(', ');
      (l.innerHTML = c),
        n.append(o),
        e.append(i),
        e.append(a),
        e.append(l),
        $('#pokemonModal').modal('toggle');
    });
  }
  return {
    add: n,
    getAll: function() {
      return t;
    },
    addListItem: function(t) {
      let e = document.querySelector('.container'),
        n = document.createElement('div');
      n.classList.add('pokemon-list__container', 'col-6', 'col-lg-4', 'mb-4');
      let i = document.createElement('button');
      (i.innerText = t.name),
        i.classList.add('btn', 'btn-block'),
        i.setAttribute('data-target', '#pokemonModal', 'data-toggle', 'modal'),
        n.appendChild(i),
        e.appendChild(n),
        i.addEventListener('click', function() {
          o(t);
        });
    },
    loadList: function() {
      return fetch(e)
        .then(function(t) {
          return t.json();
        })
        .then(function(t) {
          t.results.forEach(function(t) {
            n({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function(t) {
          console.error(t);
        });
    },
    loadDetails: function(t) {
      let e = t.detailsUrl;
      return fetch(e)
        .then(function(t) {
          return t.json();
        })
        .then(function(e) {
          return {
            name: t.name,
            imageUrl: e.sprites.front_default,
            height: e.height,
            types: [...e.types]
          };
        })
        .catch(function(t) {
          console.error(t);
        });
    },
    showDetails: o
  };
})();
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(t) {
    pokemonRepository.addListItem(t);
  });
});
