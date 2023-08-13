// el constructor define las propiedades y metodos

// function Perro(){
//     this.patas = 4,
//     this.ladrar = function(){
//         console.log('Guau');
//     };
// };

//luego tenemos las instancias de ese objeto 
//que podemos crear tantas veces como queramos.

// let simba = new Perro();
// let reina = new Perro();
// let batu = new Perro();


// agregar parametros dentro del constructor para construir 
//en esta caso perros distintos que serian nuestros objetos

// function Perro(raza, edad){
//     this.patas = 4,
//     this.raza = raza,
//     this.edad = edad,
//     this.ladrar = function(){
//         console.log('Guau');
//     };
// }

// let simba = new Perro('Shih Tzu', 4);
// let reina = new Perro('Caniche', 15);
// let batu = new Perro('Cruza', 7);

// function Empleado(nombre, apellido, edad, cargo){
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.edad = edad,
//     this.cargo = cargo, 
//     this.presentarse = function(){
//         console.log(`Mi nombre es ${this.nombre} ${this.apellido}, soy ${this.cargo}, y tengo ${this.edad} años de edad`);
//     };
// }

// let empleado1 = new Empleado('Javier', 'Espinosa', 42, 'programador Junior');
// let empleado2 = new Empleado('Tomas', 'Espinosa', 14, 'Ceo');
// let empleado3 = new Empleado('Valeria', 'Espinosa', 11, 'Diseño');
// let empleado4 = new Empleado('mariana', 'Espinosa', 23, 'Recursos Humanos');

//otras formas de crear objetos:
//la primera es: Object que es un aposibilidad de crear objetos vacios

let coche1 = new Object();
coche1.marca = 'Chevrolet';
coche1['modelo'] = 'prisma';
coche1.encender = function(){
    console.log('Coche encendido');
}

//Tambien podemos asignar una propiedad directamente 

// let perro1 = new Object({
//     nombre: 'simba',
//     raza: 'doberman'
// })

//metodo Create peermite crear una nueva instancia a partir de cualquier objeto existente:

let coche2 = Object.create(coche1);