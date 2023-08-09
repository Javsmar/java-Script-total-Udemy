const mostrarResultado = (resultado) => {
    const resultElement = document.getElementById('resultado');
    resultElement.value = resultado;
}

const random = () => {
    const mostrarNum1 = parseFloat(document.getElementById('num1').value);
    const mostrarNum2 = parseFloat(document.getElementById('num2').value);
    const min = mostrarNum1;
    let max = mostrarNum2;
    max = max + 1;
    const result = Math.floor(Math.random() * (max - min) + min);
    mostrarResultado(result);
    
}
const round = () => {
    const resultElement = parseFloat(document.getElementById('resultado').value);
    mostrarResultado( Math.round(resultElement));
}

const floors = () => {
    const resultElement = parseFloat(document.getElementById('resultado').value);
    mostrarResultado(Math.floor(resultElement));
}
const ceils = () => {
    const resultElement = document.getElementById('resultado');
    const resultado = parseFloat(resultElement.value);
    const resultCeil = Math.ceil(resultado);
    mostrarResultado(resultCeil);
}

const suma = () => {
    const num1Value = parseFloat(document.getElementById('num1').value);
    const num2Value = parseFloat(document.getElementById('num2').value);
    const resultSuma = num1Value + num2Value;
    mostrarResultado(resultSuma);
}

const resta = () => {
    const num1Value = parseFloat(document.getElementById('num1').value);
    const num2Value = parseFloat(document.getElementById('num2').value);
    const resultResta = num1Value - num2Value;
    mostrarResultado(resultResta);
}

const multiplicacion = () => {
    const num1Value = parseFloat(document.getElementById('num1').value);
    const num2Value = parseFloat(document.getElementById('num2').value);
    const resultMultiplicacion = num1Value * num2Value;
    mostrarResultado(resultMultiplicacion);
}

const division = () => {
    const num1Value = parseFloat(document.getElementById('num1').value);
    const num2Value = parseFloat(document.getElementById('num2').value);
    const resultDivision = num1Value / num2Value;
    mostrarResultado(resultDivision);
}


const raizCadrada = () => {
    const num2Value = parseFloat(document.getElementById('num2').value);
    const resultsqrt = Math.sqrt(num2Value);
    mostrarResultado(resultsqrt);
}

const potencia = () => {
    const num1Value = parseFloat(document.getElementById('num1').value);
    const num2Value = parseFloat(document.getElementById('num2').value);
    const resultPow = Math.pow(num1Value, num2Value);
    mostrarResultado(resultPow);
}

const valorAbsoluto = () => {
    const num1Value = parseFloat(document.getElementById('num1').value);
    const num2Value = parseFloat(document.getElementById('num2').value);
    const resultAbs = Math.abs(num2Value);
    mostrarResultado(resultAbs);
}













// const calculator = (num) => {
//     let calculo = 0;
//     const suma = (num) => calculo += num;
//     const resta = (num) => calculo -= num;
//     const multiplicacion = (num) => calculo *= num;
//     const division = (num) => calculo /= num;
//     const resultado = (num) => num;

//     return{
//         suma,
//         resta,
//         multiplicacion,
//         division,
//         resultado
//     } 
// }

// const calculadora = calculator();
// console.log(calculadora.suma(5));
// console.log(calculadora.resta(2));
// console.log(calculadora.multiplicacion(4));
// console.log(calculadora.division(2));
// console.log(calculadora.resultado(10));