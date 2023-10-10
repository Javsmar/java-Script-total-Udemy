'use strict'

const express = require('express');
const app = express();

const mongoDB = require('./conexion');

app.use(express.json());


//http://localhost:3000/estudiantes
app.get('/estudiantes', (pedido, respuesta) => {
    mongoDB.conexionDB()
    .then((conexion) => {
        const controlador = conexion.db().collection('estudiantes');
        controlador.find().toArray()
            .then((filas) => respuesta.send(filas))
            .catch((error) => respuesta.send(error))
    });
});

//http://localhost:3000/estudiantes/2
app.get('/estudiantes/:legajo', (pedido, respuesta) => {
    const legajo = pedido.params.legajo;
    mongoDB.conexionDB()
        .then((conexion) => {
            const controlador = conexion.db().collection('estudiantes');
            
            // Utilizar el operador de igualdad para buscar estudiantes con el legajo específico
            controlador.find({ legajo: parseInt(legajo) }).toArray()
                .then((filas) => {
                    // Enviar los resultados como respuesta solo si hay resultados
                    if (filas.length > 0) {
                        respuesta.send(filas);
                    } else {
                        respuesta.status(404).send('Estudiante no encontrado');
                    }
                })
                .catch((error) => respuesta.send(error));
        })
        .catch((error) => respuesta.send(error));
});


//http://localhost:3000/estudiantes/create
app.post('/estudiantes/create', (pedido, respuesta) => {
    mongoDB.conexionDB()
    .then((conexion) => {
        const controlador = conexion.db().collection('estudiantes');
        controlador.insertOne(pedido.body)
        .then(respuesta.send('Nuevo registro creado'))
        .catch((error) => respuesta.send(error))
    });
});

//http://localhost:3000/cursos/create
app.post('/cursos/create', (pedido, respuesta) => {
    mongoDB.conexionDB()
    .then((conexion) => {
        const controlador = conexion.db().collection('cursos');
        controlador.insertOne(pedido.body)
        .then(respuesta.send('Nuevo registro creado'))
        .catch((error) => respuesta.send(error))
    });
});

//http://localhost:3000/cursos  para buscar el listado de cursos completo
app.get('/cursos', (pedido, respuesta) => {
    const legajo = pedido.params.legajo;
    mongoDB.conexionDB()
    .then((conexion) => {
        const controlador = conexion.db().collection('cursos');
        controlador.find().toArray()
            .then((filas) => respuesta.send(filas))
            .catch((error) => respuesta.send(error))
    });
});

//http://localhost:3000/notas/create
app.post('/notas/create', (pedido, respuesta) => {
    mongoDB.conexionDB()
    .then((conexion) => {
        const controlador = conexion.db().collection('notas');
        controlador.insertOne(pedido.body)
        .then(respuesta.send('Nuevo registro creado'))
        .catch((error) => respuesta.send(error))
    });
});

//http://localhost:3000/notas
app.get('/notas', (pedido, respuesta) => {
    const legajo = pedido.params.legajo;
    mongoDB.conexionDB()
    .then((conexion) => {
        const controlador = conexion.db().collection('notas');
        controlador.find().toArray()
            .then((filas) => respuesta.send(filas))
            .catch((error) => respuesta.send(error))
    });
});





app.listen(3000, ()=> {
    console.log('Servidor esta en linea')
});