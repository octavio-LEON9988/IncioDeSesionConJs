const baseDeDatos = [
    {
        usuario: "octavio",
        contraseña: "1234"
    }
    ,
    {
        usuario: "ludmila",
        contraseña: "4321"
    }
    ,
    {
        usuario: "manuel",
        contraseña: "1212"
    }
]

const usuarioLogeado = {
    usuario: "",
    contraseña: ""
}

const buttonLogin = document.querySelector("#botonLog");
const inputs = document.querySelectorAll(".inputUser");
const sesionIniciada = document.querySelector("#inicioSesion");

const bienvenidaAlUsuario = nombre => {
    sesionIniciada.innerHTML = `<h1 class="tituloBienvenida">Bienvenid@ ${nombre}</h1>`
}

//==============================DOM/InicioSesion=================================

buttonLogin.addEventListener("click", ()=>{
    const usuarioFind = baseDeDatos.find(login => usuarioLogeado.usuario == login.usuario && usuarioLogeado.contraseña == login.contraseña);
    if(usuarioFind != undefined){
        bienvenidaAlUsuario(usuarioFind.usuario);
        localStorage.setItem("usuario", JSON.stringify(usuarioFind))
    }
    if(usuarioFind == undefined){
        sesionIniciada.innerHTML = `<h1 class="tituloNoEncontrado">Usuario no encontrado :(</h1>`
    }
})

inputs.forEach(elemento => {
    elemento.addEventListener("change",(evento)=>{
        if(evento.target.name == "usuario"){
            usuarioLogeado.usuario = evento.target.value
        } 
        if(evento.target.name == "contraseña"){
            usuarioLogeado.contraseña = evento.target.value
        }
    })
})

//================================LocalStorage===================================

localStorage.setItem("baseDeDatos", JSON.stringify(baseDeDatos));
console.log(JSON.parse(localStorage.getItem("baseDeDatos")));