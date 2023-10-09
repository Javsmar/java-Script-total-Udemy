async function obtenerTodos(){
    try{
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db',{
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }) 
        .then(res => res.json())
        .then(data => {
            let cuerpoTabla = document.getElementById('tblContenido');
            let exit = "";
            for(let element of data.dispositivos){
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
            cuerpoTabla.innerHTML = exit;
        })
        .catch(error => {throw new Error("Error en la solicitud" + error)})
    } catch(error){
        console.error(error)
    }
}

async function consultarUno(){
    try{
        let id = document.getElementById('txtConsulta').value;
        if(id === ''){
            alert('No se ha ingresado ningún ID');
            return;
        }
        axios.get('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + _id )
        .then(res => {
            let dispositivo = res.data;
            document.getElementById('consultarNombre').value = dispositivo.marca;
            document.getElementById('consultarModelo').value = dispositivo.modelo;
            document.getElementById('consultarColor').value = dispositivo.color;
            document.getElementById('consultarAlmacenamiento').value = dispositivo.almacenamiento;
            document.getElementById('consultarProcesador').value = dispositivo.procesador;
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error.message)})
    } catch(error){
        console.error(error)
    }
}

async function agregarUno(){
    try{
        let marca = document.getElementById('inputmarca').value;
        let modelo = document.getElementById('inputModelo').value;
        let color = document.getElementById('inputColor').value;
        let almacenamiento = document.getElementById('inputAlmacenamiento').value;
        let procesador = document.getElementById('inputProcesador').value;

        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/',{
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
        })
        .then(res => res.json())
        .then(data => {
            obtenerTodos();
            alert(`Se ha agregado un nuevo dispositivo:
            \nMarca: ${data.marca}
            \nModelo: ${data.modelo}
            \nColor: ${data.color}
            \nAlmacenamiento: ${data.almacenamiento}
            \nProcesador: ${data.procesador}`)
        })
        .catch(error => {throw new Error("Error en la solicitud" + error)})
    }catch(error){
        console.error(error);
    }
}

async function modificarUno(){
    try{
        let id = document.getElementById('txtConsulta').value; 
        let nombre = document.getElementById('consultarNombre').value;
        let modelo = document.getElementById('consultarModelo').value;
        let color = document.getElementById('consultarColor').value;
        let almacenamiento = document.getElementById('consultarAlmacenamiento').value;
        let procesador = document.getElementById('consultarProcesador').value;

        if(nombre === ''){
            alert('El registro no está completo');
            return;
        }
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id,{
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
        })
        .then(res => res.json())
        .then(data => {
            alert(`Se ha modificado el archivo ${id}. Nuevo contenido:\n ${JSON.stringify(data)}`);
        })
        .catch(error => {throw new Error("Error en la solicitud" + error)})
    }catch(error){
        console.error(error);
    }
}

async function EliminarUno(){
    try{
        let id = document.getElementById('txtConsulta').value;
        if(id === ''){
            alert('No ha ingresado ningún ID');
            return;
        }
        axios.delete('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id)
        .then(res => {
            alert(`Se ha eleiminado el archivo ${id}.`);
            document.getElementById('consultarNombre').value = "";
            document.getElementById('consultarModelo').value = "";
            document.getElementById('consultarColor').value = "";
            document.getElementById('consultarAlmacenamiento').value = "";
            document.getElementById('consultarProcesador').value = "";

            obtenerTodos();
        })
        .catch(error => {throw new Error("Error en la solicitud" + error)})
    }catch(error){
        console.error(error);
    }
}