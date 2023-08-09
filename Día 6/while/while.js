// let nombre;

// while(nombre != 'javier'){
//     nombre = prompt('dime mi nombre');
// }

// document.write('<h1>Hola ' + nombre + '</h1>');

// function testLoop(vueltas){
//     let contador = 0;
//     while (contador<vueltas) {
//         console.log("Vuelta " + contador)
//         contador++;
//     }
// }

// testLoop(5);


function testLoop(parametro) {
    while(parametro < 10){
        console.log(parametro);
        parametro++;
    }
}

testLoop(5);