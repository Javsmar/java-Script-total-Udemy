let boton = document.getElementById('miBoton');

// Formas de utilizar los diferentes tipos de eventos

// boton.addEventListener('click', function(){
//     alert('boton fue presionado')
// });

// function mostrarMensaje(){
//     alert('boton fue presionado')
// };

// boton.addEventListener('click', mostrarMensaje);


function otroMensaje(){
    alert('EStamos utlizando el evento "mouseover"')
};

boton.addEventListener('mouseover', otroMensaje);