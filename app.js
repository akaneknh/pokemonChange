
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const ball = document.querySelector("#ball");
let i = 0;
const newImg = document.querySelector('#pokemon');
const pokemonNames = ['???', 'Bulbasaur（フシギダネ）', 'Ivysaur（フシギソウ）', 'Venusaur（フシギバナ）', 'Charmander（ヒトカゲ）', 'Charmeleon（リザード）', 'Charizard:リザードン'];
const newText = document.querySelector('#pokemonText');

ball.addEventListener("click", () => {
  i++
  if (i > 6) {
    i = 0;
  }
  newText.innerText = pokemonNames[i];
  newImg.src = `${baseURL}${i}.png`;
  newImg.appendChild(newImg);

});


