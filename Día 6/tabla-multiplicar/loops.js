// for (let i = 1; i <= 5; i++){
//     document.write('<h' + i + '>Hola mundo</h' + i + '>')
// }

// function testLoop() {
//     for(let x = 0; x < 5; x++){
//         document.write('<p>Vuelta ' + x + '</p>')
//     }
// }

// let test = testLoop();
// console.log(test);

// function testLoops() {
//     for(let x = 1; x <= 3; x++){
//         document.write('<p>Vueltas' + x + ' </p>');
//     }
    
// }

// let test2 = testLoops();
// console.log(test2);

// function tablasMultiplicar(num){
//     let number = parseFloat(document.getElementById('number').value);

//     let listTable = document.getElementById('listaTabla');

    
//     for(let i = 1; i <= 10; i++){

//         let result = number * i;
//         let resultado = number + ' x ' + i + ' = ' + result;
//         let itemLista = document.createElement('li');
//         itemLista.innerText = resultado;//el metodo innerText establecemos el elemnto interno de la lista
//         listTable.appendChild(itemLista);
//     }
// }

function testLoop(numero) {
    
    for(let x = 1; x <= 10; x++){
        let result = numero * x;
        return result;
    }
}
