// function sumarNumeros(a,b,){
//     setTimeout(function(){
//         console.log(a + b);
//     }, 2000);
// }
// sumarNumeros(3,5);


// Manejo de errores con callback

// function sumarNumeros(a, b, callback){
//     setTimeout(function(){
//         if(typeof a != 'number' || typeof b != 'number'){
//             return callback(new Error('Algún argumento no es un número'));
//         }
//         callback(null, a + b);
//     }, 1000);
// }

// sumarNumeros(3, 5, function(error, resultado){
//     if(error){
//         console.log(error)
//     }else{
//         console.log(resultado);
//     }
// });


// Manejo errores con promesas

// function sumarNumeros(a,b,){
//     return new Promise(function(resolve, recjet){
//         setTimeout(function(){
//             if(typeof a != 'number' || typeof b != 'number'){
//                 recjet(new Error('ambos arguemtos deben ser números'));
//             }else{
//                 resolve(a + b);
//             }
//         }, 2000);
//     })
// }
// sumarNumeros(3,5)
// .then(function(resultado){
//     console.log(resultado);

// }).catch(function(error){
//     console.log(error);
// })


// Manejo errores con Async / Await

async function sumarNumeros(a,b,){
    if(typeof a != 'number' || typeof b != 'number'){
        throw new Error('Aguno de losarguemtos no es un número');
    }
    return a + b;
}

async function manejarErrores(){
    try{
        let resultado = await sumarNumeros(2, 3);
        console.log(resultado);
    }catch(error){
        console.log(error.message);
    }
}


manejarErrores();
