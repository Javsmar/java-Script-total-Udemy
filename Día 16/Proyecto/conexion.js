const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017/Proyecto-udemy');

const conexionDB = ()=> {
    return client.connect()
    .then((dbclient) => {
        return dbclient;
    })
    .catch((error) => {
        returnerror;
    });
};

module.exports ={conexionDB};