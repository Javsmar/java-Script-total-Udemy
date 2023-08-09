// function forOf(){
//     let myArray1 = ['a', 'b', 'c', 'd', 'e'];
//     for(let i of myArray1){
//         document.write(i);
//     }
// }

// forOf()

// function forOf(){
//         let myArray1 = 'bienvenido';
//         for(let i of myArray1){
//             document.write(i + '<br>');
//         }
//     }

//     forOf()


// let miArray = [5, 9, 6, 4, 8];
// let suma = 0;

// function testLoop() {
//     for(let i of miArray){
//         suma += i;
//     }
//     return suma;
// }

// let test = testLoop();
// console.log(test);

function controlsDeclarations(){
    let saludo = 'bienvenidos';
    for(let i of saludo){
        if (i != 'n'){
            console.log(i);
        }else{
            continue;
        }
    }
}

controlsDeclarations()