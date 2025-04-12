const saludos = ["hola", "holanda", "saludos", "jelow"];
const registroUsuarios = document.getElementById("registroUsuarios");

const btnSaludo = document.getElementById("btnSaludo");
const nombreID = document.getElementById("nombreID");
const apellidoID = document.getElementById("apellidoID");
const edadID = document.getElementById("edadID");

const arraySaludo = () => {
  ingresaSaludos.innerHTML = saludos.map((i) => `<li>${i}</li>`).join("");
};
arraySaludo();

btnSaludo.addEventListener("click", () => {
  let nuevoSaludo = prompt("ingresa un saludo");
  saludos.push(nuevoSaludo);
  if (nuevoSaludo === "") {
    saludos.pop(nuevoSaludo);
    alert("no se puede ingresar un saludo vacio");
  }
  arraySaludo();
});

btnChao.addEventListener("click", () => {
  let borrarSaludo = saludos;
  saludos.pop(borrarSaludo);
  arraySaludo();
});

const datosUsuario = document.getElementById("datosUsuario");
const usuario = [
  {
    nombre: "",
    Apellido: "",
    edad: "",
  },
];

const mostrarUsuario = () => {
  datosUsuario.innerHTML = `<li>${usuario.nombre} ${usuario.Apellido}</li><li>${usuario.edad}</li> `;
};
const ingresarUsuario = document.getElementById("ingresarUsuario");

ingresarUsuario.addEventListener("click", () => {
  usuario.nombre = nombreID.value;
  usuario.Apellido = apellidoID.value;
  usuario.edad = edadID.value;

  mostrarUsuario();
});

const usuariosRegistrados = [ 
    {
        nombre: "Juan",
        Apellido: "Pérez",
        edad: 25,
    },
    {
        nombre: "Ana",
        Apellido: "García",
        edad: 30,
    },
    {
        nombre: "Luis",
        Apellido: "Martínez",
        edad: 28,
    },
]
const btnRegistrar = document.getElementById("btnRegistrar");

    registroUsuarios.innerHTML = usuariosRegistrados.map((i) => `<li>${i.nombre} ${i.Apellido} ${i.edad}</li>`).join("");

btnRegistrar.addEventListener("click", () => {
    let nuevoUsuario = {
        nombre: usuario.nombre,
        Apellido: usuario.Apellido,
        edad: usuario.edad
    };
    usuariosRegistrados.push(nuevoUsuario);
    const mostrarNuevoUsuarioRegistrado = () => {
        registroUsuarios.innerHTML =usuariosRegistrados.map((i) => `<li>${i.nombre} ${i.Apellido} ${i.edad}</li>`).join("");
    
};
if (nuevoUsuario.nombre === "" || nuevoUsuario.Apellido === "" || nuevoUsuario.edad === "") {
    usuariosRegistrados.pop(nuevoUsuario);
    alert("no se puede ingresar un saludo vacio");
}else{
    alert("Usuario registrado correctamente");
}
mostrarNuevoUsuarioRegistrado();
}); 