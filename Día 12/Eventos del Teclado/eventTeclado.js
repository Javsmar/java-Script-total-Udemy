// Obtenemos una referencia al elemento del DOM con el ID 'miCampo'
let campo = document.getElementById('miCampo');

// Definimos una función llamada 'verificarNumero' que toma un parámetro 'event'
function verificarNumero(event){
    // Comprobamos si el código de tecla está fuera del rango de los dígitos del 0 al 9
    if (event.keyCode < 48 || event.keyCode > 57) {
        // Prevenimos el comportamiento por defecto del evento (por ejemplo, evitar escribir caracteres no numéricos)
        event.preventDefault();
    }
}

// Agregamos un escuchador de eventos al campo para el evento 'keydown'
campo.addEventListener('keydown', verificarNumero);


campo.addEventListener('keyup', function(event){
    console.log('entrada del usuario: ' + event.target.value)
});

campo.addEventListener('keypress', function(event){
    console.log('caracter ingresado: ' + event.key)
})

