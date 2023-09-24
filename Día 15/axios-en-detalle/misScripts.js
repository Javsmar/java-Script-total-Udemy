let datos = {
    title: 'NUevo Ppost',
    body: 'Mi contenido'
}

let miToken = 'Este_es_mi_token';

axios.interceptors.request.use(
    (config)  => {
        config.headers.Authorization = `Bearer $(miToken)`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    ( respuesta) => {
        respuesta.data.customField = "Nuevo Campo";
        return respuesta;
    }, (error) => {
        return Promise.reject(error)
    }
)

let pedido1 = axios.get('https://api.ejemplo.com/data1');
let pedido2 = axios.get('https://api.ejemplo.com/data2');
let pedido3 = axios.get('https://api.ejemplo.com/data3');


Promise.all([pedido1, pedido2, pedido3])
.then(([res1, res2, res3]) => {
    //código
})
.catch(error => {
    //manejar errores
})


//axios.all('https://jsonplaceholder.typicode.com/posts', datos)
// .then(res => console.log("Post fue creado con exito", res.data))
// .catch(error => console.log('Error al publicar', error))