function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let automovil1 = new Automovil('nissan', 'quasquai', 'gris', 2018, 'javier');
let automovil2 = new Automovil('ford', 'fiesta', 'azul', 2020, 'Mariana');
let automovil3 = new Automovil('chevrolet', 'traker', 'rojo', 2013, 'valeria');

let automoviles = [automovil1, automovil2, automovil3];

Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}

Automovil.prototype.encender = function(){
    alert('el automovil esta en marcha');
}

Automovil.prototype.verAuto = function(){
    return ` ${this.marca} - ${this.modelo} - ${this.titular} `;
}


function verRegistros(){
    let lista = document.getElementById('listRegisters');
    for(let automovil of automoviles){
        let item = document.createElement('li');
        item.innerText = automovil.verAuto();
        lista.appendChild(item);
    }
}