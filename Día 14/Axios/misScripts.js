function obtenerInformacion(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(res){
        let listaInformacion = document.querySelector('#listaInformacion');
        for(let i = 0; i < res.data.length; i++){
            let itemLista = document.createElement('li');
            itemLista.innerText = res.data[i].title;
            listaInformacion.appendChild(itemLista);
        }
    })
    .catch(function(error){
        alert(error);
    })
}