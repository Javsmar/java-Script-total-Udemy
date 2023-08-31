// Method PUT

/*fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PUT',
    headers: {
        'Content-Type': ' application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo Titulo',
        body: ' Nueva Description'
    })
})
.then(res => res.json())
.then(exit => console.log(exit))
.catch(error => console.error('Error', error));*/


// Method DELETE
/*fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'DELETE',
    
})
.then(res => res.json())
.then(exit => console.log(exit))
.catch(error => console.error('Error', error));*/

// Method PATCH
// fetch('https://jsonplaceholder.typicode.com/posts/5', {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': ' application/json'
//     },
//     body: JSON.stringify({
//         title: 'Nuevo Titulo',
        
//     })
// })
// .then(res => res.json())
// .then(exit => console.log(exit))
// .catch(error => console.error('Error', error));


function obtenerUsuario(id) {
    let usuario;
    setTimeout(() => {
    if (id === 1) {
    usuario = { id: 1, nombre: 'John Doe' };
    }
    }, 2000);
    return usuario;
    }
    const usuario = obtenerUsuario(1);
    console.log(usuario);