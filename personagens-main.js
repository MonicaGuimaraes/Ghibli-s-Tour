import { navHamburguer } from './nav.js';
import { searchCharacter, filterAlfa, filterFilmCharacters }
  from './data.js';
import data from './data/ghibli/ghibli.js';

navHamburguer()

const peopleImage = document.getElementById('cardsCharacters');
function showCharacter(arrPeople) {
  peopleImage.innerHTML = arrPeople.map((item) =>
    `
    <div class="card">
      <img src= "${item.img}" class="characterPoster">
      <p class= "nomePersonagem"><strong>${item.name}</strong><br></p>
      <p class= "caracPersona"><strong>Age: </strong> ${item.age}</p><br>
      <p class= "caracPersona"><strong>Specie: </strong> ${item.specie}</p><br>
      <p class= "caracPersona"><strong>Gender: </strong> ${item.gender}</p><br>
      <p class= "caracPersona"><Strong>Film: </strong>${item.title}</p>
      </div>
`).join('')
}
const films = data.films
const characters = data.films.map(arrPeople => {
  arrPeople.people.forEach(element => element['title'] = arrPeople.title)
  return arrPeople.people
})

const arrCharacters = [].concat.apply([], characters);
showCharacter(arrCharacters);

const namePerson = document.getElementById('searchCharac');

const filterName = () => {
  order.value = 'order'
  filmsCharacters.value = 'filmsCharacters'
  const typeName = namePerson.value
  const selectedCharacter = searchCharacter(arrCharacters, typeName);
  showCharacter(selectedCharacter);
};
namePerson.addEventListener('keyup', filterName);

//ordem alfabética
const orderFilter = (a) => {
  const orderSelec = a.target.value;
  if (orderSelec !== "") {
    if (filmsCharacters.value !== 'filmsCharacters') {
      const filterOrder = filterAlfa(resultCharactersFilms, orderSelec)
      showCharacter(filterOrder)
    } else {
      const filterOrder = filterAlfa(arrCharacters, orderSelec)
      showCharacter(filterOrder)
    }
  }
}
const order = document.getElementById("selecOrder")
order.addEventListener("change", orderFilter)

let resultCharactersFilms = []
const filmsCharacters = document.getElementById("inputCharactersFilm")
filmsCharacters.addEventListener("change", (event) => {
  resultCharactersFilms = []
  if (filmsCharacters.value !== "filmsCharacters") {
    resultCharactersFilms = filterFilmCharacters(films, event.target.value)
    showCharacter(resultCharactersFilms)
  } else {
    showCharacter(arrCharacters)
  }
})
