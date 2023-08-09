let array1 = [7, 4, 2, 9, 6];


function listaNotas(){
    let lista = document.getElementById('listaNotas');

    for(let nota of array1){
        let item = document.createElement('li');// creamos un elemento  lista donde se ingresaran las notas
        item.innerText = nota; // innerText pone los elementos internos del elemento lista que en esta caso es nota
        lista.appendChild(item);// con appenChild agregamos el elemento 
    }
}

function calcularPromedio(){
    let suma = 0;

    for (let i = 0; i < array1.length; i++){
        suma  += array1[i];
    }
    let promedio = (suma / 5);
    document.getElementById('promedio').textContent = promedio;

}

function notaMasAlta(){
    let notaAlta = 0;
    let i = 0;
    while(i < 5){
        if(array1[i] > notaAlta){
            notaAlta = array1[i]
        }
        i++;
    }
    document.getElementById('nota').textContent = notaAlta;
}

function aplazo(){
    let aplazo = 'No';
    let i = 0;

    do{
        if(array1[i] < 4 ){
            aplazo = 'si';
            break;
        }
        i++;
    }while(i < 5);
    document.getElementById('aplazado').textContent = aplazo;
}