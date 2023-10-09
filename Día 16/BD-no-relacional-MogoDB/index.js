'use strict';
//Configutramos el servidor con express
const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(3000);

// LLamar al objeto MongoClient de componente mongoDB
const {MongoClient} = require('mongodb')

// Creamos una function asincrona para hacer las peticiones al servisor
async function usar(){
    // creamos una nueva instancia de mongo con la variable client
    const client = new MongoClient('mongodb://127.0.0.1:27017/mibase');

    //Conectamos y hacemos nuestra peticiones
    try {
        const conexion = await client.connect();
        const controlador = conexion.db().collection('clientes');

        let respuesta, filas, filtro;

        //Insertar un nuevo registro
        // const  nuevoCliente = {nombre: 'Javier Espinosa', genero: 0, telefono: 1234567, domicilio:'Av Siempreviva 4269'};
        // respuesta = await controlador.insertOne(nuevoCliente);
        // console.log('insertado', respuesta);

        //Insertar un nuevo registro
        // const  segundoCliente = {nombre: 'Luz Dary', genero: 0, telefono: 1234567, domicilio:'Calle 4 6:38'};
        // respuesta = await controlador.insertOne(segundoCliente);
        // console.log('insertado', respuesta);

        // //Realizar una consulta general de todos los registros
        // filas = await controlador.find().toArray();
        // console.log('Seleción', filas);

        // //Modificar el resgistro
        // const cambiarCliente = {$set: {genero: 1, telefono: 7654321}};
        // filtro = {nombre:'Javier Espinosa'};
        // respuesta = await controlador.updateOne(filtro, cambiarCliente);
        // console.log('Actualizado:', respuesta);

        // //Realizar consulta
        // filtro = {genero: 1};
        // filas = await controlador.find(filtro).toArray();
        // console.log('Selección:', filas);

        // //Eliminar un registro
        // filtro = {nombre: 'Luz Dary'};
        // respuesta = await controlador.deleteOne(filtro);
        // console.log('Eliimnado', respuesta);

        // //Realizar una consulta
        filas = await controlador.find().toArray();
        console.log('Seleción', filas);

    } catch (error) {
        console.log(error)
    }
};

usar()