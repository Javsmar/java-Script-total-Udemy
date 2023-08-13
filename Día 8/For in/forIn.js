// for in lo utilizamos para iterar sobre las propiedades
// de un objecto en lugar de susu elementos

function Perro (raza, edad, color) {
    this.raza = raza,
    this.edad = edad,
    this.color = color,
    this.ladrar = function(){
        console.log('Guau')
    }
}

let simba = new Perro('Labrador', 4, 'marron');
let reina = new Perro('caniche', 15, 'blanco');
let batu = new Perro('cruze', 8, 'negro');


for(let item in simba){
    console.log(item + ':' + simba[item]);
}

