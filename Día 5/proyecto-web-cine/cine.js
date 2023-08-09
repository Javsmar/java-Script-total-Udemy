function recomendar(genero){
    let textEdad = parseFloat(document.getElementById('edad').value);
    let textRecomendada = document.getElementById('recomendada');

    switch(genero){
        case 'drama':
            if(textEdad < 13){
                textRecomendada.textContent = 'Casablanca';
            }else{
                if(textEdad < 16){
                    textRecomendada.textContent = 'The Shawshank Redention';
                }else{
                    textRecomendada.textContent = 'Taxi Driver';
                }
                
            }
            break;

        case 'comedia':
            if(textEdad < 13){
                textRecomendada.textContent = 'Back to the Future';
            }else{
                if(textEdad < 16){
                    textRecomendada.textContent = 'The truman Shwo';
                }else{
                    textRecomendada.textContent = 'The wolf of wall Street';
                }
                
            }
            break;

        case 'Musical':
            if(textEdad < 13){
                textRecomendada.textContent = 'La La Land';
            }else{
                if(textEdad < 16){
                    textRecomendada.textContent = 'Less Miserables';
                }else{
                    textRecomendada.textContent = 'The Rocky Horror Picture';
                }
                
            }
            break;

        case 'crimen':
            if(textEdad < 13){
                textRecomendada.textContent = 'No hay opciones para esta edad';
            }else{
                if(textEdad < 16){
                    textRecomendada.textContent = 'El secreto de tus ojos';
                }else{
                    textRecomendada.textContent = 'The Godfather';
                }
                
            }
            break;

    }
    
}