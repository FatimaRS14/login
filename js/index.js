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
        return;
    }
    //recuperar datos
    console.log('el valor para user es:' + usuarioVal);
    console.log('el valor para pass es:' + passwordVal);

    

}


