// Seleccionar el elemento de audio del DOM usando su ID
let audio = document.querySelector('#audio');

// Seleccionar el elemento de lista de canciones del DOM usando su ID
let listaCanciones = document.querySelector('#listaCanciones');

// Agregar un evento 'change' al elemento de lista de canciones
listaCanciones.addEventListener('change', cambiarCancion);

// Función para cambiar la canción cuando se selecciona una nueva en la lista
function cambiarCancion() {
    // Obtener la URL de la canción elegida desde el valor de la lista
    let cancionElegida = listaCanciones.value;
    
    // Establecer la fuente del elemento de audio a la URL de la canción elegida
    audio.src = cancionElegida;
    
    // Iniciar la reproducción de la nueva canción
    audio.play();

    // Crear un evento personalizado llamado 'cambioDeCancion'
    let evento = new CustomEvent('cambioDeCancion');
    // Despachar (disparar) el evento personalizado en el elemento de audio
    audio.dispatchEvent(evento);
}
// Agregar un event listener para el evento personalizado 'cambioDeCancion'
audio.addEventListener('cambioDeCancion', mostrarCancion);

// Función para mostrar la canción actual cuando se dispara el evento personalizado
function mostrarCancion(){
     // Mostrar una alerta con el nombre de la canción actual obtenido del valor de la lista de canciones
    alert('la canción actual es: ' + listaCanciones.value);
}
