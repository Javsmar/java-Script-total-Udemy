function calcularLitros(){
    const elementKm = document.getElementById('texkm').value;
    
    const cantKm = Number(elementKm);

    const cantLiters = Math.ceil(cantKm / 8.8);

    const result = document.getElementById('textResultado');
    result.textContent = 'reposta' + cantLiters + 'litros de combustible';
}