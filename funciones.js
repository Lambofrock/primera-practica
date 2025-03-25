// function saludar() {
//     console.log("¡Hola, mundo!");
// }

// saludar();

const saludo = document.getElementById("saludo");
const btnSaludo = document.getElementById("btnSaludo");
const btnChao = document.getElementById("btnChao");
const popUp = document.getElementById("popUp");
function zawarudo () {
    let audio = new Audio('zawarudo.mp3');
    audio.play();

}
//mas saludos al apretar el boton

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function saludar() {
  const random = getRandomInt(3);
  console.log(random);
  if (random === 0) {
    saludo.textContent = "¡Hola, mundo!";
  } else if (random === 1) {
    saludo.textContent = "Hello, world!";
  } else { zawarudo();
    saludo.textContent = "konnichiwa, ZA WARUDO!";

  }
}

btnSaludo.addEventListener("click", () => {
  popUp.classList.add("open");
  saludar();
});

btnChao.addEventListener("click", () => {
  popUp.classList.remove("open");
});
