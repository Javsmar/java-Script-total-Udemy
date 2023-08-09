function extraerNumerodesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;

}


function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;
    ventas1 = extraerNumerodesdeElemento("ventasTienda1");
    ventas2 = extraerNumerodesdeElemento("ventasTienda2");
    ventas3 = extraerNumerodesdeElemento("ventasTienda3");
    ventas4 = extraerNumerodesdeElemento("ventasTienda4");
    ventas5 = extraerNumerodesdeElemento("ventasTienda5");
    ventas6 = extraerNumerodesdeElemento("ventasTienda6");

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;
    let mensajeSalida = 'Total Ventas: ' + totalVentas;
    let elementoSalida = document.getElementById('parrafoSalida');
    elementoSalida.textContent = mensajeSalida;

}