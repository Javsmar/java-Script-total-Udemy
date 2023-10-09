// Configurar con expressJS el servidor de la app

const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(3000);

//llamar al componente de mysql

let mysql = require('mysql');

//establecer los parametros de la conexión

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'mi-base-udemy'
});

// nos conectamos con la base

connection.connect();

// Agregar un nuevo registro
connection.query('INSERT INTO cliente VALUES ("federico", 1, 1234567, "av.432")', function(error, resultados){
    if (error) throw error;
    console.log(resultados);
});

//realizar consulta  a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
    if (error) throw error;
    console.log(filas);
});

//Realizar modifcación de registro
connection.query('UPDATE cliente SET genero = 0, telefono = 987654 WHERE id = 1', function(error, resultados){
    if (error) throw error;
    console.log(resultados);
})

//realizar consulta  a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
    if (error) throw error;
    console.log(filas);
});

//Eliminar un registro
connection.query('DELETE FROM cliente WHERE id = 1', function(error, resultados){
    if (error) throw error;
    console.log(filas);
});

//realizar consulta  a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
    if (error) throw error;
    console.log(filas);
});

// Cerramos la conexión con
connection.end();