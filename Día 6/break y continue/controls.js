let array1 = [1, 5, 24, 95, 11, 10, 62, 15, 9];

function menorCincuenta(){
    
    for(i of array1){
        if(i < 50){
            document.write(i + '<br>');
        }else{
            //break;
            continue;
        }
    }
}

let menores = menorCincuenta()
document.write( menores  +' Esto es todo');

