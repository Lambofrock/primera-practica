

let escritura = document.getElementById("escritura");
let numero = document.getElementById("numero");
let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  let mensajeIngresado = prompt("Ingrese un numero para multiplicarlo por 3");
  if (isNaN(mensajeIngresado)) {
    mensajeIngresado = Number(mensajeIngresado);
    escritura.textContent = "No ingresaste un numero";
    saludar();
  } else {
    mensajeIngresado = Number(mensajeIngresado);
    escritura.textContent = mensajeIngresado + " * 3";
    // console.log("numero ingresado:", mensajeIngresado);
    for (let i = 0; i < 6; i++) {
      if (mensajeIngresado % 2 === 0) {
        numero.textContent =
          " resultado final " + mensajeIngresado*3 + " (es par)";
      } else {
        numero.textContent =
          " resultado final " + mensajeIngresado*3 + " (es impar)";
      }
    }
  }


});

