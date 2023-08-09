function consultarPrecio(){
    let elementprecio = document.getElementById('precio');

    let elementFruta = document.getElementById('fruta').value;

    switch(elementFruta){
        case '1':
            elementprecio.textContent = 'valor: $8.45';
            break;
        case '2':
            elementprecio.textContent = 'valor: $8.00';
            break;
        case '3':
            elementprecio.textContent = 'valor: $7.50';
            break;
        case '4':
            elementprecio.textContent = 'valor: $5.00';
            break;
        case '5':
            elementprecio.textContent = 'valor: $6.25';
            break;
    }
}