const saludos = ["hola", "holanda","saludos","jelow" ]

const btnSaludo = document.getElementById("btnSaludo")

const arraySaludo =()=>{
    
ingresaSaludos.innerHTML = saludos.map(i => `<li>${i}</li>`).join('');
}
arraySaludo()


btnSaludo.addEventListener("click",()=>{
let nuevoSaludo = prompt("ingresa un saludo")
saludos.push(nuevoSaludo)
if(nuevoSaludo === ''){
    saludos.pop(nuevoSaludo)
    alert("no se puede ingresar un saludo vacio")}
arraySaludo()
})

btnChao.addEventListener("click",()=>{
    let borrarSaludo = saludos
    saludos.pop(borrarSaludo)
    arraySaludo()
    })

const datosUsuario = document.getElementById ("datosUsuario") 
const usuario = {
        nombre:"nombre",
        Apellido:"apellido",
        edad:"edad"
    }

const  mostrarUsuario = ()=>{
datosUsuario.innerHTML = `<li>${usuario.nombre}</li>`
}

mostrarUsuario()
