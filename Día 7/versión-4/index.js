function crearTiendas(contenedorID, min, cantidadTiendas){
    //encontrar contenedor por su ID
    let elementoContenedor = document.getElementById(contenedorID);
    //creamos un loop para crear tantas tiendas como se pidan
    for(let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++){
        //crear texto de label para poder llamar a la función
        let textoEtiqueta = 'Tienda ' + conteoTiendas;

        //llamamos a la función que ya hicimos crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textLabel, valorMin){
    //primero creamos la etiquetas de parrafo
    let elementoParrafo = document.createElement('p');

    //segundo creamos la etiqueta label que vamos a meter dentro del parrafo
    let elemetoEtiqutaLabel = document.createElement('label');
    elemetoEtiqutaLabel.innerText = textLabel + ': ';
    //conectar label con el imput creamos el atributo for
    elemetoEtiqutaLabel.setAttribute('for', textLabel);

    //creamos el elemento input
    let elementoInput = document.createElement('input');
    //establecemos varios atributos para input
    elementoInput.setAttribute('type', 'number');
    elementoInput.setAttribute('id', textLabel);
    elementoInput.setAttribute('min', valorMin);
    elementoInput.setAttribute('value', 0);

    //agregamos label e input al elememtoParrafo
    elementoParrafo.appendChild(elemetoEtiqutaLabel);
    elementoParrafo.appendChild(elementoInput);

    return elementoParrafo;
}


function extraerNumerodesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;

}


function calcular(){
    let ventas = [];
    ventas[0] = extraerNumerodesdeElemento("ventasTienda1");
    ventas[1] = extraerNumerodesdeElemento("ventasTienda2");
    ventas[2] = extraerNumerodesdeElemento("ventasTienda3");
    ventas[3] = extraerNumerodesdeElemento("ventasTienda4");
    ventas[4] = extraerNumerodesdeElemento("ventasTienda5");
    ventas[5] = extraerNumerodesdeElemento("ventasTienda6");

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas)
    let ventaMenor = calcularMenor(ventas)


    let mensajeSalida = 'Total Ventas: ' + totalVentas +
                        ' / Venta mayor:' + ventaMayor + 
                        ' / venta Menor:' + ventaMenor;
    let elementoSalida = document.getElementById('parrafoSalida');
    elementoSalida.textContent = mensajeSalida;

}

function sumarTotal(array){
    let total = 0;
    for(let venta of array){
        total += venta;
    }
    return total;
}

function calcularMayor(array){
    let maximo = array[0];

    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }
    return maximo;

}

function calcularMenor(array){
    let menor = array[0];

    for(let venta of array){
        if(venta < menor){
            menor = venta;
        }
    }
    return menor;

}