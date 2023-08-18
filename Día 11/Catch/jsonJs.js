let datosJson;

fetch('persona.json') // Realiza una solicitud GET al archivo 'persona.json'
.then(res => res.json()) // Convierte la respuesta en formato JSON
.then((exit) => { // Callback que se ejecuta cuando la respuesta se convierte a JSON
    datosJson = exit; // Asigna los datos JSON a la variable datosJson
    

    let elementText = document.getElementById('nombre'); // Obtiene el elemento HTML por su ID
    elementText.textContent = datosJson.nombre; // Establece el contenido del elemento con el nombre del JSON
})
.catch(function(error) {
    alert(error)
})
