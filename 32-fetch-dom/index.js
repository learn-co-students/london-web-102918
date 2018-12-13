// load and display pokemons

// - fetch pokemons from the API
// - parse JSON
// - for each item in the pokemon array:
//    - create list elements (document.createElement)
//    - add pokemon data to elements
//    - append elements to list

const apiURL = "http://localhost:3000/pokemons"
const pokeListEl = document.querySelector('#poke-list')
const pokeFormEl = document.querySelector('#poke-form')
const pokeNameEl = document.querySelector('input[name=poke-name]')
const pokeImageEl = document.querySelector('input[name=poke-image]')

// - fetch pokemons from the API
// - parse JSON
function fetchPokemons() {
  fetch(apiURL)
    .then(response => response.json())
    .then(renderPokemons)
}

// - for each item in the pokemon array:
//    - create list elements (document.createElement)
//    - add pokemon data to elements
//    - append elements to list

function renderPokemons(pokemonArray) {
  console.log(pokemonArray)

  pokemonArray.forEach(renderSinglePokemon)
}

function renderSinglePokemon(pokemon) {
  const pokeEl = document.createElement('li')
  pokeEl.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.image}">
  `
  pokeListEl.appendChild(pokeEl)
}

// save new pokemon
// ...
/*
- when the user submits the form
   - DONE!!!!! prevent default (reloads the page)
   - DONE!!!!!get name and image
    - get the DOM node
    - get the value for each node
   - DONE!!!!!render the new pokemon
   - save them on the server
   - check that save worked.
*/

pokeFormEl.addEventListener('submit', saveNewPokemon)

function saveNewPokemon(event) {
  event.preventDefault()
  console.log(event)
  const name =     pokeNameEl.value
  const imageURL = pokeImageEl.value
  renderSinglePokemon({
    name: name,
    image: imageURL
  })

  fetch(apiURL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      image: imageURL
    })
  }).then(console.log)
}

fetchPokemons()
