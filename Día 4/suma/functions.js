function sumar(num1, num2){
    let resultado =  num1 + num2;
    return resultado;
}

function mostrarResultado(){

    const num1 = parseFloat(document.getElementById("primerNumero").value);
    
    const num2 = parseFloat(document.getElementById("segundoNumero").value);
    
    const texto = document.getElementById("textResultado");
    
    const result = sumar(num1, num2);
    
    
    texto.textContent = result;
}








