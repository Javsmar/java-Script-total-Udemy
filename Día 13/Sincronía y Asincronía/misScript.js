// Define una función llamada "avanzaFila" que toma un argumento "callback"
function avanzaFila(callback){
    // Establece un retraso de 5000 milisegundos (5 segundos) antes de ejecutar el siguiente código
    setTimeout(function(){
        // Imprime en la consola un mensaje indicando que "Tu turno ha llegado"
        console.log('Tu turno ha llegado');
        // Llama a la función "callback" que se pasa como argumento
        callback();
    }, 5000); // 5000 milisegundos (5 segundos)
}

// Define una función llamada "mujerLlama"
function mujerLlama(){
    // Imprime en la consola un mensaje indicando "te presentas a tu turno"
    console.log('Te presentas a tu turno');
}

// Imprime en la consola un mensaje indicando "llegas a la fila"
console.log('Llegas a la fila');

// Llama a la función "avanzaFila" y pasa la función "mujerLlama" como argumento
avanzaFila(mujerLlama);

// Imprime en la consola un mensaje indicando "compro café"
console.log('Compro café');
