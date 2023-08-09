// let vidas = 5;
// do{
//     console.log('vidas: ', vidas);
//     vidas--;
// }while(vidas >=0);

// let valorIngresado = prompt('escribe algo', 'Escriba aqui')


// let nombre;
// do{
//     nombre = prompt('dime mi nombre');
// }while(nombre != 'javier');

// document.write('<h1>Ese es mi nombre</h1>');

// function testLoop(vueltas){
//     let contador = 0;
//     do {
//         console.log("Vueltas " + contador);
//         contador++;
//     } while (contador < vueltas);
// }

// testLoop(5);

// function testLoop(numero) {
//     let contador = 1;
    
//     do{
//         let result = contador * numero;
//         console.log(result)
//         contador++;
//     }while(contador <= numero);
// }

// testLoop(8);

function testLoop(numero) {
    let x = 1;
    do {
        console.log(numero*x);
        x++;
    } while (x<11)
}

testLoop(2);