//declaracion de variables de referencia a objetos
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formRegistro');

formulario.addEventListener('submit', registro);
//integracion de funcion 
function registro(e){
    e.preventDefault();
    //console.log('Entrada a funcion de registro');
    let nombreVal = nombre.value;
    let emailVal = email.value;
    let userVal = user.value;
    let passValue = pass.value;
    //validacion de datos
    if(nombreVal == '' || emailVal == '' || userVal == '' || passValue == ''){
        return;
    } 
    //console.log('Validacion de datos');
    const usuario = {//atributos llave valor
        nombre: nombreVal,
        email: emailVal,
        user: userVal,
        pass: passValue

    }
    //localStorage solo guarda Strings
    localStorage.setItem('usuario', JSON.stringify(usuario));

   nombre.value = '';
   email.value = '';
   user.value = '';
   pass.value = '';

    console.log('usuario guardado');


}

