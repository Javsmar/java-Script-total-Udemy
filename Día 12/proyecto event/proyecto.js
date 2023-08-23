// Seleccionar elementos del DOM
let selector = document.querySelector('#miSelector'); // Selecciona el elemento con ID 'miSelector' (un <select>)
let input = document.querySelector('#miInput'); // Selecciona el elemento con ID 'miInput' (un <input>)
let boton = document.querySelector('#miBoton'); // Selecciona el elemento con ID 'miBoton' (un <button>)
let lista = document.querySelector('#miListado'); // Selecciona el elemento con ID 'miListado' (un <ul> para mostrar resultados)

// Archivo JSON por defecto
let archivo = 'peliculas.json';

// Agregar event listeners a los elementos
// Cuando cambie el valor del selector (opción seleccionada), se llama a cambiarArchivo
selector.addEventListener('change', cambiarArchivo);
// Cuando ocurra el evento personalizado 'cambioModo', se llama a mensajeModo
selector.addEventListener('cambioModo', mensajeModo);
// Cuando se presione una tecla en el campo de entrada, se llama a verificarInput
input.addEventListener('keydown', verificarInput);
// Cuando se haga clic en el botón, se llama a buscar
boton.addEventListener('click', buscar);

// Función para cambiar el archivo seleccionado
function cambiarArchivo() {
    archivo = selector.value; // Actualiza el valor del archivo con el valor seleccionado en el selector
    let evento = new CustomEvent('cambioModo'); // Crea un evento personalizado llamado 'cambioModo'
    selector.dispatchEvent(evento); // Dispara el evento personalizado en el selector
}

// Función para mostrar el mensaje de modo
function mensajeModo() {
    alert('El Archivo de búsqueda ahora es: ' + selector.value); // Muestra un mensaje con el valor seleccionado en el selector
}

// Función para verificar la entrada en el campo de búsqueda
function verificarInput(evento) {
    // Verifica si la tecla presionada no es una letra o una tecla de espacio o retroceso
    if ((evento.keyCode < 65 || evento.keyCode > 90) && evento.keyCode !== 32 && evento.keyCode !== 8) {
        evento.preventDefault(); // Previene la acción por defecto de la tecla (no permite ingresar la tecla)
    }
}

// Función para realizar la búsqueda y mostrar resultados
function buscar() {
    lista.innerHTML = ''; // Limpia los resultados anteriores en la lista

    // Realiza una solicitud fetch para obtener el archivo JSON
    fetch(archivo)
    .then(res => res.json()) // Parsea la respuesta como JSON
    .then(function(exit) {
        // Recorre cada película en los datos del archivo JSON
        for (let item of exit.data) {
            // Verifica si el nombre de la película comienza con el texto ingresado en el campo de entrada (en mayúsculas)
            if (item.nombre.startsWith(input.value.toUpperCase())) {
                // Crea un elemento <p> para mostrar la sinopsis de la película
                let p = document.createElement('p');
                p.id = item.nombre; // Asigna un ID al párrafo (nombre de la película)
                p.innerHTML = item.sinopsis; // Establece el contenido del párrafo como la sinopsis
                p.style.display = 'none'; // Oculta el párrafo por defecto

                // Crea un elemento <li> para mostrar el nombre de la película en la lista
                let li = document.createElement('li');
                li.innerHTML = item.nombre; // Establece el contenido del <li> como el nombre de la película

                // Cuando el cursor pasa sobre la película, muestra la sinopsis
                li.addEventListener('mouseover', function() {
                    let p = document.getElementById(item.nombre); // Obtiene el párrafo por su ID
                    p.style.display = 'block'; // Muestra el párrafo
                });

                // Cuando el cursor sale de la película, oculta la sinopsis
                li.addEventListener('mouseout', function() {
                    let p = document.getElementById(item.nombre); // Obtiene el párrafo por su ID
                    p.style.display = 'none'; // Oculta el párrafo
                });

                // Agrega el párrafo al <li> y el <li> a la lista
                li.appendChild(p);
                lista.appendChild(li);
            }
        }
    })
    .catch(function(error) {
        alert(error); // Muestra una alerta en caso de error
    });
}
