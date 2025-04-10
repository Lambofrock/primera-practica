// function saludar() {
//     console.log("¡Hola, mundo!");
// }

// saludar();

const saludo = document.getElementById("saludo");
const btnSaludo = document.getElementById("btnSaludo");
const btnChao = document.getElementById("btnChao");
const popUp = document.getElementById("popUp");

function zawarudo() {
  let audio = new Audio("zawarudo.mp3");
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
  } else {
    zawarudo();
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

// otra funcion
let resultadito = document.getElementById("resultadito");
let btnOtra = document.getElementById("btnOtra");

btnOtra.addEventListener("click", () => {
  let promt1 = prompt("Ingrese el primer número:"); // ingresa un string, debe convertirse a número abajo
  let promt2 = prompt("Ingrese el segundo número:");
  promt1 = Number(promt1); // convertir a número
  promt2 = Number(promt2);

  function sumar(a, b) {
    return a + b;
  }

  let resultado = sumar(promt1, promt2); //argumentos

  resultadito.textContent = "El resultado de la suma es: " + resultado;
});

// eventos para ingresar 

let texto = document.getElementById("texto");
const btnTexto = document.getElementById("btnTexto");
const resEscrito = document.getElementById("resEscrito");
const realTime = document.getElementById("realTime");

// evento "input"
texto.addEventListener("input", (e) => {
  realTime.textContent = "se escribira cada tecla aca:  " + texto.value;
});

// evento "change"
texto.addEventListener("change", () => {  
  resEscrito.textContent = "hola  " + texto.value;
});

