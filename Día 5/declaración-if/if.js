function calcular(){
    let elementRespuesta = document.getElementById('decision');

    let elementPrecio = document.getElementById('precio').value;

    if (elementPrecio < 5 ){
        elementRespuesta.textContent = 'Puedes comprar 2 cartones de leche';
    }else{
        if(elementPrecio < 8){
            elementRespuesta.textContent = 'Puedes comprar 1 carton de leche';
        }else{
            elementRespuesta.textContent = 'No uedes comprar  leche';
        }
    }
}