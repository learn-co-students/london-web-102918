const getPokemon = () => {
  fetch('http://localhost:3000/pokemon')
  .then(resp => resp.json())
  .then(resp => renderPokemons(resp))
}

const renderPokemons = (data) => {
  const pokemonContainer = document.querySelector('#pokemon-container')
  data.forEach(pokemon => {
    pokemonContainer.appendChild(renderSinglePokemon(pokemon))
  })
}

const renderSinglePokemon = (pokemon) => {
  const pokemonCard = document.createElement('div')
  pokemonCard.className = "pokemon-container"
  pokemonCard.innerHTML =   `
    <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
      <h1 data-pokemonid=${pokemon.id} class="center-text">${pokemon.name}</h1>
      <div style="width:239px;margin:auto">
        <div style="width:96px;margin:auto">
          <img data-id=${pokemon.id} data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
        </div>
      </div>
    </div>`

    const pokemonName = pokemonCard.querySelector('h1')
    pokemonName.addEventListener('click', updateName)

    const pokemonImage = pokemonCard.querySelector('img')
    pokemonImage.front = pokemon.sprites.front
    pokemonImage.back = pokemon.sprites.back
    pokemonImage.addEventListener('click', flipImage)
    return pokemonCard
}

  const updateName = (event) => {
    fetch(`http://localhost:3000/pokemon/${event.target.dataset.pokemonid}`, {
      method: 'PATCH',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({name: event.target.innerText.toUpperCase()
      })
    })
    .then(resp => resp.json())
    .then(resp => event.target.innerText = resp.name)
  }

const flipImage = (event) => {
  if(event.target.src.includes('back')){
    event.target.src = event.target.front
  }
  else {
    event.target.src = event.target.back
  }
}

const filterPokemon = (event) => {
  const pokemonCards = document.querySelectorAll('.pokemon-container')
  pokemonCards.forEach(card => {
    const name = card.querySelector('h1').innerText
    if (name.includes(event.target.value)){
      card.style.display = ''
    }
    else {
      card.style.display = 'none'
    }
  })
}


getPokemon()
document.querySelector('input').addEventListener('keyup', filterPokemon)
