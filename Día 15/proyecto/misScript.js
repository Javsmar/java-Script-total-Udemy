async function obtenerTodos(){
    try {
        // Realiza una solicitud GET para obtener todos los dispositivos
        const response = await fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            // Convierte la respuesta en formato JSON
            const data = await response.json();

            // Obtiene el elemento de la tabla donde se mostrarán los dispositivos
            let cuerpoTabla = document.getElementById('tblContenido');
            let exit = "";

            // Itera a través de los dispositivos y crea filas para la tabla
            for (let element of data.dispositivos) {
                exit += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.marca}</td>
                    <td>${element.modelo}</td>
                    <td>${element.color}</td>
                    <td>${element.almacenamiento}</td>
                    <td>${element.procesador}</td>
                </tr>
                `;
            }
            
            // Inserta las filas en la tabla
            cuerpoTabla.innerHTML = exit;
        } else {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}

async function consultarUno(){
    try {
        let id = document.getElementById('txtConsulta').value;
        if (id === '') {
            alert('No se ha ingresado ningún ID');
            return;
        }

        // Realiza una solicitud GET para consultar un dispositivo por su ID
        const response = await fetch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            // Convierte la respuesta en formato JSON
            const dispositivo = await response.json();

            // Llena los campos del formulario con los datos del dispositivo
            document.getElementById('consultarNombre').value = dispositivo.marca;
            document.getElementById('consultarModelo').value = dispositivo.modelo;
            document.getElementById('consultarColor').value = dispositivo.color;
            document.getElementById('consultarAlmacenamiento').value = dispositivo.almacenamiento;
            document.getElementById('consultarProcesador').value = dispositivo.procesador;
        } else {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}

async function agregarUno(){
    try {
        // Obtiene los valores del nuevo dispositivo desde los campos del formulario
        let marca = document.getElementById('inputmarca').value;
        let modelo = document.getElementById('inputModelo').value;
        let color = document.getElementById('inputColor').value;
        let almacenamiento = document.getElementById('inputAlmacenamiento').value;
        let procesador = document.getElementById('inputProcesador').value;

        // Realiza una solicitud POST para agregar un nuevo dispositivo
        const response = await fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                marca: marca,
                modelo: modelo,
                color: color,
                almacenamiento: almacenamiento,
                procesador: procesador
            })
        });

        if (response.ok) {
            // Actualiza la tabla de dispositivos
            obtenerTodos();

            // Muestra una alerta con los datos del nuevo dispositivo
            const data = await response.json();
            alert(`Se ha agregado un nuevo dispositivo:
            \nMarca: ${data.marca}
            \nModelo: ${data.modelo}
            \nColor: ${data.color}
            \nAlmacenamiento: ${data.almacenamiento}
            \nProcesador: ${data.procesador}`);
        } else {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}

async function modificarUno(){
    try {
        let id = document.getElementById('txtConsulta').value;
        let nombre = document.getElementById('consultarNombre').value;
        let modelo = document.getElementById('consultarModelo').value;
        let color = document.getElementById('consultarColor').value;
        let almacenamiento = document.getElementById('consultarAlmacenamiento').value;
        let procesador = document.getElementById('consultarProcesador').value;

        if (nombre === '') {
            alert('El registro no está completo');
            return;
        }

        // Realiza una solicitud PUT para modificar un dispositivo existente
        const response = await fetch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                data: {
                    modelo: modelo,
                    color: color,
                    almacenamiento: almacenamiento,
                    procesador: procesador
                }
            })
        });

        if (response.ok) {
            // Muestra una alerta con los datos del dispositivo modificado
            const data = await response.json();
            alert(`Se ha modificado el archivo ${id}. Nuevo contenido:\n ${JSON.stringify(data)}`);
        } else {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}

async function EliminarUno(){
    try {
        let id = document.getElementById('txtConsulta').value;
        if (id === '') {
            alert('No ha ingresado ningún ID');
            return;
        }

        // Realiza una solicitud DELETE para eliminar un dispositivo por su ID
        const response = await fetch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            // Limpia los campos del formulario
            document.getElementById('consultarNombre').value = "";
            document.getElementById('consultarModelo').value = "";
            document.getElementById('consultarColor').value = "";
            document.getElementById('consultarAlmacenamiento').value = "";
            document.getElementById('consultarProcesador').value = "";

            // Actualiza la tabla de dispositivos
            obtenerTodos();

            alert(`Se ha eliminado el archivo ${id}.`);
        } else {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}
