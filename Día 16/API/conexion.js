// configurar la conexión para nuestra base de datos en mongdb
const { MongoClient } = require('mongodb');

// Crea una nueva instancia de MongoClient y especifica la URL de conexión a la base de datos
const client = new MongoClient('mongodb://127.0.0.1:27017/mibase');

// Desarrollar una función anónima para conectarnos con la base de datos y retornar el objeto que tiene la conexión
const conexionDB = () => {
    // Utiliza el método connect de MongoClient para establecer la conexión a la base de datos
    return client.connect()
        .then((dbClient) => {
            // Si la conexión es exitosa, devuelve el objeto dbClient que contiene la conexión
            return dbClient;
        })
        .catch((error) => {
            // Si ocurre algún error durante la conexión, devuelve el error
            return error;
        });
};

// Exporta la función conexionDB para que pueda ser utilizada en otros módulos
module.exports = { conexionDB };
