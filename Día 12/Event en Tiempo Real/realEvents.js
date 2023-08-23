// Crear una conexión WebSocket con el servidor en localhost en el puerto 8080
let socket = new WebSocket('ws://localhost:8080');

// Seleccionar el elemento de entrada de mensaje del DOM usando su ID
let mensajeIngresado = document.querySelector('#mensajeIngresado');

// Seleccionar el botón "enviar" del DOM
let boton = document.querySelector('#enviar');

// Función para mostrar mensajes en el contenedor de mensajes
function mostrarMensajes(contenido) {
    // Seleccionar el contenedor de mensajes del DOM usando su ID
    let contenedorMensajes = document.querySelector('#mensajesChat');
    
    // Crear un nuevo elemento de párrafo <p>
    let elementMensaje = document.createElement('p');
    
    // Establecer el contenido del mensaje en el elemento <p>
    elementMensaje.innerText = contenido;
    
    // Agregar el elemento <p> al contenedor de mensajes
    contenedorMensajes.appendChild(elementMensaje);
}

// Cuando se hace clic en el botón "enviar"
enviar.onclick = function() {
    // Tomar el mensaje del campo de entrada de mensaje
    let mensaje = mensajeIngresado.value;
    
    // Mostrar el mensaje en la interfaz
    mostrarMensajes(mensaje);
    
    // Enviar el mensaje a través del socket WebSocket
    socket.send(mensaje);
};

// Cuando se recibe un mensaje del servidor a través del WebSocket
socket.onmessage = function(event) {
    // Tomar el mensaje del evento
    let mensaje = event.data;
    
    // Mostrar el mensaje en la interfaz
    mostrarMensajes(mensaje);
}
