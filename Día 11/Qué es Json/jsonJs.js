// let datosJson;
// let xhr = new XMLHttpRequest(); // Crea un objeto XMLHttpRequest para hacer la solicitud HTTP.

// xhr.open('GET', "persona.json", true); // Abre una conexión GET al archivo 'persona.json'.
// xhr.responseType = 'json'; // Especifica que esperamos una respuesta JSON.

// xhr.onload = function() { // Define una función que se ejecutará cuando la solicitud esté completa.
//     if (xhr.status === 200) { // Verifica si la respuesta fue exitosa (código de estado 200).
//         datosJson = xhr.response; // Almacena la respuesta JSON en la variable datosJson.
//         let elementoText = document.getElementById('nombre'); // Obtiene el elemento HTML por su ID.
        
//         elementoText.textContent = datosJson.nombre; // Establece el contenido del elemento con el nombre del JSON.
//     } else {
//         // En caso de error (puedes manejarlo aquí).
//     }
// }

// xhr.send(); // Envía la solicitud HTTP.


// let titulo;
// let director;
// let lanzamiento;
// let duracion;
// let actores;
// let premioOscar;

// function obtenerDatos() {
//     let datosJson;
//     let xhr = new XMLHttpRequest(); // Crea un objeto XMLHttpRequest para hacer la solicitud HTTP.
//     xhr.open('GET', 'datos.json', true); // Abre una conexión GET al archivo 'datos.json'.
//     xhr.responseType = 'json'; // Especifica que esperamos una respuesta JSON.
//     xhr.onload = function() { // Define una función que se ejecutará cuando la solicitud esté completa.
//         if (xhr.status === 200) { // Verifica si la respuesta fue exitosa (código de estado 200).
//             datosJson = xhr.response; // Almacena la respuesta JSON en la variable datosJson.
//             titulo = datosJson.titulo; // Asigna el valor de la propiedad 'titulo' a la variable 'titulo'.
//             director = datosJson.director; // Asigna el valor de la propiedad 'director' a la variable 'director'.
//             lanzamiento = datosJson.lanzamiento; // Asigna el valor de la propiedad 'lanzamiento' a la variable 'lanzamiento'.
//             duracion = datosJson.duracion; // Asigna el valor de la propiedad 'duracion' a la variable 'duracion'.
//             actores = datosJson.actores; // Asigna el valor de la propiedad 'actores' a la variable 'actores'.
//             premioOscar = datosJson.premioOscar; // Asigna el valor de la propiedad 'premioOscar' a la variable 'premioOscar'.

//             // Aquí puedes realizar acciones con las variables asignadas, como mostrarlas en la página.
//         }
//     }
//     xhr.send(); // Envía la solicitud HTTP.
// }

// // Llama a la función para obtener los datos y asignar las variables.
// obtenerDatos();


