// Obtenemos una referencia al elemento del DOM con el ID 'miBoton'
let boton = document.getElementById('miBoton');
let div = document.getElementById('miDiv');
let enlace = document.getElementById('miEnlace');

// Definimos una función llamada 'evitarEnlace' que toma un parámetro 'event'
function evitarEnlace(event){
    // Prevenimos el comportamiento por defecto del evento
    event.preventDefault();
    // Mostramos una ventana emergente con un mensaje
    alert('Enlace no habilitado');
}

// Definimos una función llamada 'mostrarMensaje' que toma un parámetro 'event'
function mostrarMensaje(event){
    // Mostramos una ventana emergente con el elemento que desencadenó el evento
    alert(event.target);
    alert(event.currentTarget);
}

// Agregamos un escuchador de eventos al botón para el evento 'click'
//boton.addEventListener('click', mostrarMensaje);
div.addEventListener('click', mostrarMensaje);
enlace.addEventListener('click', evitarEnlace);

