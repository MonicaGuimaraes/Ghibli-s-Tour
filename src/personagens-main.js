import { searchCharacter, filterAlfa}
from './data.js';
import data from './data/ghibli/ghibli.js';

//print personagens

const peopleImage = document.getElementById('cardsCharacters');
  function showCharacter(arrPeople) {
    peopleImage.innerHTML = arrPeople.map((item) =>
      item.people.map((carac)=>`
    <div class="card">
      <img src= "${carac.img}" class="characterPoster">
      <p class= "nomePersonagem"><strong>${carac.name}</strong><br></p>
      <p class= "caracPersona"><strong>Age: </strong> ${carac.age}</p><br>
      <p class= "caracPersona"><strong>Specie: </strong> ${carac.specie}</p><br>
      <p class= "caracPersona"><strong>Gender: </strong> ${carac.gender}</p><br>
      <p class= "caracPersona"><Strong>Film: </strong>${item.title}</p>
      </div>
`).join('') )
}

const films = data.films

showCharacter(films);

const namePerson= document.getElementById('searchCharac');



const filterName = () => {
  const typeName = namePerson.value
   const selectedCharacter = searchCharacter(films, typeName);
  showCharacter(selectedCharacter);
};
namePerson.addEventListener('keyup', filterName);


//ordem alfabética
const orderFilter = (a)=>{
  const orderSelec = a.target.value;
  if(orderSelec !== ""){
    const filterOrder = filterAlfa(films, orderSelec)
    showCharacter(filterOrder)
  }
}

const order = document.getElementById("selecOrder")
order.addEventListener ("change", orderFilter)



