function potenciaNumero(num){
    const  elementNum = document.getElementById('numPow').value;
    const numFormat = parseFloat(elementNum);

    const potencia = Math.pow(numFormat, 2);

    const result = document.getElementById('textresult');
    
    result.textContent = `La pontencia de ${elementNum}  es ${potencia}`;

    
}

// function raizCuadrada(num){
//     const result = Math.sqrt(num);
//     return result;
// }

// alert(raizCuadrada(9));



// const redondear = (num) => Math.round(num); 

// const  numeroAredondear = 5.329857;
// const numeroRedondeado = redondear(numeroAredondear);
// alert(numeroRedondeado);



//const redondear = (num) => Math.floor(num); floor redondea hacia abajo


//const redondear = (num) => Math.ceil(num); floor redondea hacia arriba

// let redondeo;
// redondeo = Math.round(6.7241569843);

const numeroAleatorio = (min, max) => {
    max = max + 1;
    const resultado = Math.floor(Math.random() * (max - min) + min); // random entre 0 y el número que queramos que sea el maximo + 1
                                                      // porque el último número no es inclusivo
    const result = document.getElementById('result');
    result.textContent = resultado;
} 