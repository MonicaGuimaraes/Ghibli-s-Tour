// estas funciones son de ejemplo

export const filterFilms = (films, valueSelec) =>
  films.filter(item => item.title.toUpperCase().includes(valueSelec.toUpperCase()))

export const filters = (films, orderSelec) => {
  if (orderSelec === "a-z"){
    return films.sort((a,b) => a.title > b.title ? 1 : -1)
  }

  if (orderSelec === "z-a"){
    return films.sort((a,b) => a.title > b.title ? -1 : 1)
  }

  if(orderSelec === "oldest"){
    return films.sort((a,b) => a.release_date > b.release_date ? 1 : -1)
  }

  if(orderSelec === "newest"){
    return films.sort((a,b) => a.release_date > b.release_date ? -1 : 1)
  }

  if(orderSelec === "lower"){
    return films.sort((a,b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? 1 : -1)
  }

  if(orderSelec === "higher"){
    return films.sort((a,b) => parseInt(a.rt_score) > parseInt(b.rt_score) ? -1 : 1)
  }
}

//busca por nome
export const searchCharacter = (films, characterSelected) =>
films.filter(carac => carac.name.toUpperCase().includes(characterSelected.toUpperCase()));


//ordem alfabética
export const filterAlfa = (films, orderSelec) => {
  if (orderSelec === "a-z"){
    return films.sort((a,b) => a.name > b.name ? 1 : -1)
  }

  if (orderSelec === "z-a"){
    return films.sort((a,b) => a.name > b.name ? -1 : 1)
  }
}
