import {filterFilms, filters} from './data.js';

import data from './data/ghibli/ghibli.js';

const films = data.films

function printCards(filmes) {
  document.getElementById('cardsFilms').innerHTML = filmes.map((item) =>
    `
  <div class="containerCards">
    <div class="moviePoster">
       <img src = "${item.poster}" class = "poster" alt="Imagem do poster">
    </div>
    <div class="movieDetails">
    <div class="movieInformation">
        <h1 class= "title">${item.title} </h1>
        <h3> Year </h3> <p class="year">${item.release_date}</p>
        <h3> Description:</h3> <p class="description"> ${item.description}</p>
        <h3> Director: </h3> <p class= "director">${item.director}<p>
        <h3> Producer: </h3> <p class="producer">${item.producer}<p>
        <h3> Score: </h3> <p class= "year">${item.rt_score}<p>
      </div>
     </div>
    </div>
    `
    )
  .join('');
}

printCards(films)

const searchMovie = () =>{
  const valueSelec = searchFilms.value;
  const movieSelec = filterFilms(films, valueSelec);
  printCards(movieSelec);
}

const searchFilms = document.querySelector("#inputSearch");
searchFilms.addEventListener("keyup", searchMovie);


const ordenator = (e) =>{
  const orderSelec = e.target.value;
  if (orderSelec !== ""){
    const filterOrder = filters(films, orderSelec)
    printCards(filterOrder)
  }
}
const order = document.getElementById("inputOrder")
order.addEventListener ("change", ordenator)

const orderAge = document.getElementById("inputAge")
orderAge.addEventListener("change", ordenator)

const orderScore = document.getElementById("inputScore")
orderScore.addEventListener("change", ordenator)

let clear = document.querySelector('.resetButton')
clear.addEventListener('click', resetFilter, printCards)

function resetFilter(){
  location.reload()
}
