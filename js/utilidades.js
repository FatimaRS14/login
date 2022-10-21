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