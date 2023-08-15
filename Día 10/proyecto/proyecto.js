class Animal{
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
    informacion(){
        return `Nombre: ${this.nombre} Peso: ${this.peso} Kg Edad: ${this.edad} años`
    }
}


class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }
    informacion(){
        return `${super.informacion()} Raza: ${this.raza}`
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
    informacion(){
        return `${super.informacion()} sexo: ${this.sexo}`
    }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }
    informacion(){
        return `${super.informacion()} color: ${this.color}`
    }
}

let miPerro = new Perro('firulais', 30, 6, 'Bulldog');
let migato = new Gato('thor', 15, 3, 'Hembra');
let miConejo = new Conejo('bugs', 10, 2, 'white');


let mascotas = [miPerro, migato, miConejo];

function mostrarAnimales(){
    let textAnimal = document.getElementById('listAnimals');
    for(let mascota of mascotas){
        let item = document.createElement('li');
        item.innerText = mascota.informacion().toLocaleUpperCase();
        textAnimal.appendChild(item);
    }
}