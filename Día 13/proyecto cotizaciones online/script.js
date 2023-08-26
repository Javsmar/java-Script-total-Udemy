function cargarContenido(){
    // Function que cargue las cotizaciones
    cargarCotizaciones(mostrarCotizacion);

    // Function que cargue los elementos de la pagina
    cargarElementos();

    // function que cargue los titulos de cada una de las cotizaciones

    cargarTextos();
}

// Función asincrónica para cargar cotizaciones desde diferentes APIs
// Utilizaremos callback
async function cargarCotizaciones(callback){

    await delay(2500);

    // Realizar una solicitud a la API de CoinDesk para obtener la cotización de Bitcoin en USD
    let promesa1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    // Llamar al callback con los datos de cotización obtenidos en formato JSON
    callback(await promesa1.json());

    // Utilzaremos async y await
    // Realizar una solicitud a la API para obtener la cotización USD a EUR
    let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD');
    // Convertir la respuesta en formato JSON y mostrar la tasa de cambio USD a EUR en el DOM
    let datos2 = await promesa2.json();
    document.querySelector('#UsdEur').append(datos2.rates.EUR);

    // utilizaremos promesas
    // Obtener datos de cotización de USD a ARS utilizando una función personalizada
    let datos3 = await crearPedido('https://open.er-api.com/v6/latest/ARS');
    // Mostrar la tasa de cambio USD a ARS en el DOM
    document.querySelector('#UsdArs').append(datos3.rates.USD);

    document.querySelector('#imgEspera').style.visibility = 'hidden';
}

// Función para mostrar la cotización de Bitcoin en USD en el DOM
// funcion para llamar el callback
function mostrarCotizacion(datos){
    let bitcoinUsd = document.querySelector('#BitcoinUsd').append(datos.bpi.USD.rate);
}

// Función asincrónica para crear un pedido utilizando XMLHttpRequest
// Función para las promesas
async function crearPedido(url){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function(){
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject(xhr.statusText);
            }
        }
        xhr.send();
    })
}

function cargarElementos(){
    document.querySelector('#imgLogo').setAttribute('src', 'logos.png');
    document.querySelector('#titulo').textContent = 'Cotizaciones Online';
    document.querySelector('#imgEspera').setAttribute('src', 'loading.gif');
    document.querySelector('#imgEspera').style.visibility = 'visible';
}

function cargarTextos(){
    document.querySelector('#UsdEur').textContent = 'EUR a USD: ';
    document.querySelector('#UsdArs').append('ARG a USD: ' );
    document.querySelector('#BitcoinUsd').append('Bitcoin a USD: ' );
}

function delay(ms){
    return new Promise(function(res){
        setTimeout(res, ms);
    })
}