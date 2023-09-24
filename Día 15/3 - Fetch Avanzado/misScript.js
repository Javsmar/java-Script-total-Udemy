let user = 'javs';
let password = 'javascriptTotal';
let token = 'miToken';

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'GET',
    credential: 'include', // Indicar si las credenciales (cookies) deben incluirse en la solicitud
    // Como definir si nuestra solicitud primero busca en el caché de la máquina
    // antes de acudir al servidor para pedir información
    cache: 'default',
    headers:{
        // Primer método con Basic
        //'Authorization': 'Basic' + btoa(user + ':' + password),

        // Segundo método con Bearer utilizando token
        'Authorization': 'Bearer' + token, // Agregar un token de autenticación si es necesario
        'Content-Type': 'application/json'
    }
})
.then(res => {
    if(res.type === 'opaqueredirect'){
        let nuevaUbicacion = res.headers.get('Location'); // Obtener la nueva ubicación en caso de redirección
        console.log("Redirigiendo a: ", nuevaUbicación);
    }else{
        return res.json(); // Procesar la respuesta como JSON si no es una redirección opaca
    }
})

.then(exit => console.log(exit))
.catch(error => console.error(error));