export function navHamburguer() {
  const body = document.querySelector('.body')
  // const menu = document.createElement('header')
  // menu.setAttribute('class', 'headerMenu')
  const menu = `
  <header class="headerMenu">
    <div class="logoImage">
      <a id="logo" href="index.html" class="link">
        <img alt="Ghibli's Tour" src="./img/GHIBLI_S_TOUR-removebg-preview.png" class="imgHeader">
      </a>
    </div>
    <nav id="navOptions" class="navOptions" aria-expanded="false">
      <button id="btnMobile" class="btnMobile">
        <span id="hamburguer" class="hamburguer"></span>
      </button>
      <ul id="menu" class="menu">
        <li>
          <a href="index.html" class="link" target="_blank">
            Home
          </a>
        </li>
        <li>
          <a href="films.html" class="link" target="_blank">
            Films
          </a>
        </li>
        <li>
          <a href="personagens.html" class="link" target="_blank">
            Characters
          </a>
        </li>
      </ul>
    </nav>
  </header>`

  body.insertAdjacentHTML('afterbegin', menu)

  const btnMobile = document.getElementById('btnMobile')

  function toggleMenu() {
    const nav = document.getElementById('navOptions')
    nav.classList.toggle('active')
  }

  btnMobile.addEventListener("click", toggleMenu)
}


