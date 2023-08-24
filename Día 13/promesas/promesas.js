// Creamos una nueva promesa usando el constructor de Promise. Esta promesa tomará una función con dos argumentos: resolve y reject.
//let miPromesa = new Promise(function(resolve, reject) {
    // Dentro de la función de la promesa, usamos setTimeout para simular una operación asíncrona que tomará algún tiempo en completarse.
    //setTimeout(function() {
        //let error = false; // Simulamos una variable que indicaría si ocurrió un error.
        //if (error) {
            // Si error es verdadero, llamamos a reject con un mensaje indicando que la promesa ha fallado.
            //reject('La promesa ha fallado');
        //} else {
            // Si error es falso, llamamos a resolve con un mensaje indicando que la promesa se cumplió correctamente.
            //resolve('La promesa se cumplió');
        //}
    //});
//});

// Usamos el método then para adjuntar una función de devolución de llamada que se ejecutará cuando la promesa se cumpla correctamente.
//miPromesa.then(function(resultado) {
    //console.log(resultado); // Imprimimos el resultado en la consola.
//}).catch(function(error) {
    //console.log(error); // Usamos el método catch para manejar el caso en que la promesa haya sido rechazada, imprimiendo el error en la consola.
//});


//------------------------------------------------------------------------------------------------------------------------------------------------------

// Creamos una nueva promesa llamada promesa1 que se resolverá después de 2000 ms (2 segundos) con el valor 'Hola'.
// let promesa1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 2000, 'Hola');
// });

// Creamos otra nueva promesa llamada promesa2 que se resolverá después de 4000 ms (4 segundos) con el valor 'Mundo'.
// let promesa2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 4000, 'Mundo');
// });

// Usamos Promise.all para combinar ambas promesas y esperar a que ambas se resuelvan.
// Promise.all([promesa1, promesa2]).then(function(valores) {
//     console.log(valores); // Una vez que ambas promesas se resuelvan, se imprimirán los valores ['Hola', 'Mundo'] en la consola.
// });

// console.log('El código sigue su camino'); // Esta línea se ejecuta de inmediato y muestra un mensaje en la consola mientras se espera a que las promesas se resuelvan.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Código para realizar una operación asincrona que consiste en que nuestro sitio haga una llamada a una api en algún servidor para
//pedirle que  os devuelve una lista de usuarios que ese servidor tiene almacenadas.

// Definimos una función llamada obtenerUsuarios que devuelve una promesa.
function obtenerUsuarios() {
    return new Promise(function(resolve, reject) {
        // Creamos una instancia de XMLHttpRequest para hacer una solicitud HTTP.
        let xhr = new XMLHttpRequest();
        
        // Configuramos la solicitud HTTP para obtener datos de la URL especificada.
        xhr.open('GET', 'http://jsonplaceholder.typicode.com/users');
        
        // Definimos el manejador de evento onload para ejecutar cuando la solicitud se complete.
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Si el estado de la solicitud es 200 (éxito), resolvemos la promesa con los datos obtenidos.
                resolve(JSON.parse(xhr.responseText));
            } else {
                // Si el estado de la solicitud no es 200, rechazamos la promesa con el mensaje de estado.
                reject(xhr.statusText);
            }
        }
        
        // Enviamos la solicitud HTTP.
        xhr.send();
    });
}

// Llamamos a la función obtenerUsuarios, que devuelve una promesa, y encadenamos el uso de then para manejar el resultado exitoso.
obtenerUsuarios()
.then(function(usuarios) {
    console.log(usuarios); // Imprimimos los datos de usuarios en la consola.
})
.catch(function(error) {
    console.error(error); // Usamos el método catch para manejar errores y mostrarlos en la consola.
});


// let promesa;

// // Definimos una función llamada test que recibe un resultado como argumento.
// function test(resultado) {
//     // Creamos una nueva promesa.
//     promesa = new Promise(function(resolve, reject) {
//         if (resultado === true) {
//             // Si el resultado es verdadero, resolvemos la promesa con el mensaje 'Correcto'.
//             resolve('Correcto');
//         } else {
//             // Si el resultado no es verdadero, rechazamos la promesa con el mensaje 'Error'.
//             reject('Error');
//         }
//     });
// }
