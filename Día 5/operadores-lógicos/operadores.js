function calcular(){
    const respuesta1 = document.getElementById('respuesta1');
    const respuesta2 = document.getElementById('respuesta2');
    const respuesta3 = document.getElementById('respuesta3');
    
    let elementEdad = document.getElementById('edad').value;

    let puedeBeber = elementEdad >= 18;
    respuesta1.textContent = puedeBeber;

    let entrarFiesta = elementEdad >= 18 && elementEdad <= 30;
    respuesta2.textContent = entrarFiesta;

    let entradaGratis = elementEdad == 20 || elementEdad == 25;
    respuesta3.textContent = entradaGratis;

}