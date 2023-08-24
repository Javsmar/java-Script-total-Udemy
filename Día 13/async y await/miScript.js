// // Definimos una función llamada obtenerDatos.
// function obtenerDatos() {
//     // Utilizamos la función fetch para hacer una solicitud a la API.
//     return fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
//         .then(function(respuesta) {
//             // Cuando la respuesta de la solicitud está disponible, convertimos la respuesta en formato JSON.
//             return respuesta.json();
//         })
//         .then(function(datos) {
//             // Cuando los datos en formato JSON están disponibles, los imprimimos en la consola.
//             console.log(datos);
//         })
//         .catch(function(error) {
//             // Si ocurre algún error en el proceso, lo capturamos y lo imprimimos en la consola.
//             console.error(error);
//         });
// }

// // Llamamos a la función obtenerDatos, que realiza la solicitud y procesa los resultados en cascada.
// obtenerDatos();

// console.log('El código sigue'); // Esta línea se ejecuta de inmediato antes de que se completen las operaciones asíncronas.



// La misma funcion con async y await

// Definimos una función asíncrona llamada obtenerDatos.
// async function obtenerDatos(){
//     // Utilizamos la palabra clave await para esperar la respuesta de la solicitud a la API.
//     let respuesta = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')

//     // Utilizamos la palabra clave await para esperar que los datos en formato JSON sean procesados.
//     let datos = await respuesta.json();

//     // Una vez que tenemos los datos, los imprimimos en la consola.
//     console.log(datos);
// }

// obtenerDatos();
// console.log('el código sigue');


async function obtenerTodosLosDatos(){
    let respuestaGasolina = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');
    let datosGasolina = await respuestaGasolina.json();

    let respuestaDolar = await fetch('http://open.er-api.com/v6/latest/USD');
    let datosDolar = await respuestaDolar.json();

    console.log(datosGasolina, datosDolar);
}

obtenerTodosLosDatos();