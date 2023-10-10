'use strict';
//Importamos el framework express

const express = require('express');

const app = express();

//Obtenemos el modulo conexion.js que creamos para configurar la conexion con la base de datos
const mongoDB = require('./conexion');

//Configurar nuestra API trabaje con el formatojson
app.use(express.json());

//Definimos un nuevo método get 
//consulta para obtener todos los documentos en la colección 'clientes' 
//y los envía como respuesta en formato JSON.
// Manejar una solicitud GET a la ruta '/clientes'
app.get('/clientes', (pedido, respuesta) => {
    // Obtener el listado de clientes
    mongoDB.conexionDB()
        .then((conexion) => {

            // Acceder a la colección 'clientes' en la base de datos
            const controlador = conexion.db().collection('clientes');
            
            // Realizar una consulta para obtener todos los documentos en la colección y convertirlos en un arreglo
            controlador.find().toArray()
                .then((filas) => respuesta.send(filas)) // Enviar el arreglo de documentos como respuesta
                .catch((error) => respuesta.send(error)) // Enviar cualquier error como respuesta en caso de fallo
        })
})


//Definimos un metodo POST que va insertar nuevos clientes
app.post('/clientes/create', (pedido, respuesta) => {
    mongoDB.conexionDB()
    .then((conexion) => {
        const controlador = conexion.db().collection('clientes');
        controlador.insertOne(pedido.body)
        .then(respuesta.send('Nuevo registro creado'))
        .catch((error) => respuesta.send(error));
    })
}) 

app.delete('/clientes/delete/:nombre', (pedido, respuesta) => {
    const nombre = pedido.params.nombre; // Obtén el nombre del parámetro de la URL
    mongoDB.conexionDB()
    .then((conexion) => {
        const controlador = conexion.db().collection('clientes');
        controlador.deleteOne({nombre: nombre})
        .then((resultado) => {
            if (resultado.deletedCount === 1) {
                respuesta.send('Registro Eliminado');
            } else {
                respuesta.send('No se encontró el registro con ese nombre');
            }
        })
        .catch((error) => respuesta.send(error));
    })
});



//Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('El servidor esta en linea')
});