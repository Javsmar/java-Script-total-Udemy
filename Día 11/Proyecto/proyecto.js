// // Declaración de variable para almacenar los datos del JSON
// let datosJson;

// // Realiza una solicitud GET al archivo 'banco.json' y convierte la respuesta a formato JSON
// fetch('banco.json')
// .then(res => res.json())
// .then((exit) => { // Maneja los datos JSON obtenidos

//     // Asigna los datos JSON a la variable datosJson
//     datosJson = exit;

//     // Obtiene el elemento HTML con el ID 'banco' y establece su contenido con el valor del campo 'banco' del JSON
//     let elementBanco = document.getElementById('banco');
//     elementBanco.textContent = `${datosJson.banco}`;

//     // Obtiene el elemento HTML con el ID 'sucursal' y establece su contenido con el valor del campo 'sucursal' del JSON
//     let elementSucursal = document.getElementById('sucursal');
//     elementSucursal.textContent = `${datosJson.sucursal}`;

//     // Obtiene el elemento HTML con el ID 'titular' y establece su contenido con el valor del campo 'titular' del JSON
//     let elementTitular = document.getElementById('titular');
//     elementTitular.textContent = `Titular: ${datosJson.titular}`;

//     // Obtiene el elemento HTML con el ID 'nro_cuenta' y establece su contenido con el valor del campo 'nro_cuenta' del JSON
//     let elementNumeroCuenta = document.getElementById('nro_cuenta');
//     elementNumeroCuenta.textContent = `Cuenta número: ${datosJson.nro_cuenta}`;

//     // Obtiene el elemento HTML con el ID 'saldo'
//     let elementSaldo = document.getElementById('saldo');

//     // Itera a través de la lista 'saldo' y crea elementos <p> para mostrar la información de saldo
//     datosJson.saldo.forEach((item) => {
//         // Itera a través de cada objeto 'item' en la lista 'saldo'
    
//         let saldoInfo = `Moneda: ${item.moneda}, Monto: ${item.monto}`;
//         // Crea una cadena 'saldoInfo' que combina los valores de 'moneda' y 'monto' del objeto actual
    
//         let saldoElement = document.createElement('p');
//         // Crea un nuevo elemento <p> en el documento
    
//         saldoElement.textContent = saldoInfo;
//         // Establece el contenido del elemento <p> creado con la cadena 'saldoInfo'
    
//         elementSaldo.appendChild(saldoElement);
//         // Agrega el elemento <p> al elemento 'elementSaldo' (contenedor de saldo en la página)
//     });
    

//     // Obtiene el elemento HTML con el ID 'cbu' y establece su contenido con el valor del campo 'cbu' del JSON
//     let elementCbu = document.getElementById('cbu');
//     elementCbu.textContent = `cbu: ${datosJson.cbu}`;

//     // Obtiene el elemento HTML con el ID 'abierto' y establece su contenido con el valor del campo 'abierto' del JSON
//     let elementAbierto = document.getElementById('abierto');
//     elementAbierto.textContent = `Abierto: ${datosJson.abierto}`;
// })
// .catch(function(error) { // Maneja los errores
//     // Muestra una alerta con el mensaje de error
//     alert(error);
// });


function cargarResumen(){
    // Obtener datos de 'banco.json'
    fetch('banco.json')
    // Manejar la respuesta como JSON
    .then(res => res.json())
    // Procesar los datos JSON
    .then(function(exit){
        // Actualizar el contenido del elemento 'banco'
        document.getElementById('banco').textContent = exit.banco;
        // Actualizar el contenido del elemento 'sucursal'
        document.getElementById('sucursal').textContent = exit.sucursal;
        // Actualizar el contenido del elemento 'titular'
        document.getElementById('titular').textContent = exit.titular;
        // Actualizar el contenido del elemento 'nro_cuenta'
        document.getElementById('nro_cuenta').textContent = exit.nro_cuenta;
        // Actualizar el contenido del elemento 'usd'
        document.getElementById('usd').textContent = exit.saldo[0].monto + ' ' + exit.saldo[0].moneda;
        // Actualizar el contenido del elemento 'eur'
        document.getElementById('eur').textContent = exit.saldo[1].monto + ' ' + exit.saldo[1].moneda;
        // Actualizar el contenido del elemento 'cbu'
        document.getElementById('cbu').textContent = exit.cbu;
        // Actualizar el contenido del elemento 'abierto'
        document.getElementById('abierto').textContent = exit.abierto;
    })
    // Manejar errores
    .catch(function(error) {
        // Mostrar una alerta con el mensaje de error
        alert(error);
    })
}

