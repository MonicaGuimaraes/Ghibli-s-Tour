// estas funciones son de ejemplo

export const filterFilms = (films, valueSelec) =>
  films.filter(item => item.title.toUpperCase().includes(valueSelec.toUpperCase()))

export const filters = (films, orderSelec) => {
  if (orderSelec === "a-z") {
    return films.sort((a, b) => a.title > b.title ? 1 : -1)
  }

  if (orderSelec === "z-a") {
    return films.sort((a, b) => a.title > b.title ? -1 : 1)
  }

  if (orderSelec === "oldest") {
    return films.sort((a, b) => a.release_date > b.release_date ? 1 : -1)
  }

  if (orderSelec === "newest") {
    return films.sort((a, b) => a.release_date > b.release_date ? -1 : 1)
  }

  if (orderSelec === "lower") {
    return films.sort((a, b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? 1 : -1)
  }

  if (orderSelec === "higher") {
    return films.sort((a, b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? -1 : 1)
  }
}

//busca por nome
export const searchCharacter = (character, characterSelected) =>
  character.filter(item => item.name.toUpperCase().includes(characterSelected.toUpperCase()));


//ordem alfabética
export const filterAlfa = (arrCharacters, orderSelec) => {
  if (orderSelec === "a-z") {
    return arrCharacters.sort((a, b) => a.name > b.name ? 1 : -1)
  }

  if (orderSelec === "z-a") {
    return arrCharacters.sort((a, b) => a.name > b.name ? -1 : 1)
  }
}

//busca por diretor
export const filterDirector = (films, directorSelected) => {
  return films.filter(film => film.director === directorSelected)
};

//personagens por filmes
export const filterFilmCharacters = (films, filmSelected) => {
  const result = films.reduce((acumulador, film) => {
    if (film.title === filmSelected) {
      acumulador = acumulador.concat(film.people)
    }
    return acumulador;
  }, [])
  return result
};


