// let nombre = "sebastian";
// let edad = 31;
// const vivo = true;
// console.log(nombre, edad);
// if (vivo == true) {
//     console.log("Estoy vivo");
// } else {
//     console.log("Estoy muerto");}

// let edad1 = 19;
// let acceso = (edad1 >= 18) && (edad1 <= 30);
// console.log(acceso); // true si la edad está entre 18 y 30

// for (let i = 0; i < 5; i++) {
//     console.log("hola mundo");
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break; // Sale del ciclo cuando i es igual a 5
//     }
//     console.log(i); // Imprime los números de 0 a 4
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         continue; // Omite los números pares
//     }
//     console.log(i); // Imprime los números impares entre 0 y 9
// }
//actividad practica//

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

  //   for (let i = 0; i < 6; i++) {
  //       console.log(mensajeIngresado++);
  //       if (mensajeIngresado % 2 === 0) {
  //           console.log("es par");
  //       } else {
  //           console.log("es impar");
  //       }
  //   }
});

