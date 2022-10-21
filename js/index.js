//declarion de variables para vincular los objetos del formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//generando eventos
formulario.addEventListener('submit', login);

//funciones a ejecutar
function login(e){
    e.preventDefault();
    //console.log('Se ejecuta evento de form');
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    //validacion de usuario y contraseña
    if(usuarioVal == ''|| passwordVal == ''){
        crearMensajeAlert('Verifica tus campos','danger');
        return;
    }
    
    if(localStorage.getItem('usuario')){
        let objeto = JSON.parse(localStorage.getItem('usuario'));

        if(usuarioVal == objeto.user && passwordVal == objeto.pass){
            crearMensaje('Usuario correcto', 'success');
            localStorage.setItem('sesion','activa');
            setTimeout(function(){
                //redireccionamiento de ventana correcta
                window.open('./inicio.html','_self');
            },2000);
        }else{
            crearMensajeAlert('Usuario incorrecto', 'danger');

        }
    }else{
       crearMensajeAlert('Usuarios no existentes', 'danger');
    }
    
}
/*
function crearMensaje(texto){
    const nuevoElemento = document.createElement('div');
    nuevoElemento.innerText = texto;
    nuevoElemento.classList.add('alert', 'alert-success');
    const divMensaje = document.getElementById('mensaje');
    divMensaje.appendChild(nuevoElemento);
    setTimeout(function(){
        nuevoElemento.remove();
     }, 2000);
 
}

function crearMensajeAlert(texto){
    const nuevoElemento = document.createElement('div');
    nuevoElemento.innerText = texto;
    nuevoElemento.classList.add('alert', 'alert-danger');
    const divMensaje = document.getElementById('mensaje');
    divMensaje.appendChild(nuevoElemento);
    setTimeout(function(){
       nuevoElemento.remove();
    }, 2000);

}

*/


