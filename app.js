
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const ball = document.querySelector("#ball");
let i = 0;
const newImg = document.querySelector('#pokemon');

ball.addEventListener("click", () => {
  i++
  if (i > 151) {
    i = 0;
  }
  newImg.src = `${baseURL}${i}.png`
  newImg.appendChild(newImg);
});

