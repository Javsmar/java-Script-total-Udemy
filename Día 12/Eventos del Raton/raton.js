// //event click

// // Obtenemos una referencia al elemento del DOM con el ID 'miMenu'
// let menu = document.getElementById('miMenu');

// // Obtenemos una referencia al elemento del DOM con el ID 'miBoton'
// let boton = document.getElementById('miBoton');

// // Agregamos un escuchador de eventos al botón para el evento 'click'
// boton.addEventListener('click', function(){
//     // Cambiamos la propiedad de estilo 'display' del elemento 'menu' a 'block'
//     menu.style.display = 'block';
// });


// event mouseover

// Obtenemos una referencia al elemento del DOM con el ID 'miMenu'
let menu = document.getElementById('miMenu');

// Obtenemos una referencia al elemento del DOM con el ID 'miBoton'
let boton = document.getElementById('miBoton');

// Agregamos un escuchador de eventos al botón para el evento 'mouseover'
boton.addEventListener('mouseover', function(){
    // Cambiamos la propiedad de estilo 'display' del elemento 'menu' a 'block'
    menu.style.display = 'block';
});


// event mouseout

// Agregamos un escuchador de eventos al botón para el evento 'mouseover'
boton.addEventListener('mouseout', function(){
    // Cambiamos la propiedad de estilo 'display' del elemento 'menu' a 'block'
    menu.style.display = 'none';
});


// event mousemove

// Agregamos un escuchador de eventos al documento para el evento 'mousemove'
document.addEventListener('mousemove', function(event){
    // Imprimimos en la consola la posición del puntero del mouse
    console.log('Posición x: ' + event.clientX + ' - Posición y: ' + event.clientY);
});
