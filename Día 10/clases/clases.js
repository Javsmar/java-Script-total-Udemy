//Declaración de una clase
class Papel{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}
// creamos un objeto a partir de la clase que es igual
// como lo hicimos en los ejercicios anteriores con la function constructor
let miPapel = new Papel(4, 5);


//Expresión de clase que se llama anonima porque no tiene un nombre luego de class
let PapelA = class{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

let papel33 = new PapelA(4,8);


//expresión de clase nombrada y su diferencia es que se le pone un nombre luego de la palabra class
let PapelB = class Papel44{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

let papel44 = new PapelA(4,8);



//subclases

class Deportista{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// ahora creamos una subclase de la clase Deportista
// la cual hereda las propiedades de la clase Deportista 
// y ademas vamos a agregar algunas propiedades mas

class Futbolista extends Deportista{
    constructor(nombre, apellido, goles){
        super(nombre, apellido);
        this.goles = goles;
    }
}
let deportisita1 = new Deportista('maradona', 'toti');

let futbolista = new Futbolista('javier', 'espinosa', 10);
