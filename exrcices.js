// let calificaciones = {
//     nombre: 'javs',
//     ingles: 10,
//     programcion: 9,
//     HTML: 8,
// }

// let media = (calificaciones.ingles + calificaciones.programcion + calificaciones.HTML) / 3;
// console.log(`Alumno ${calificaciones.nombre} media de las calificaciones ${media} `);

// let descuentos = {
//     precio: 0,
//     descuento: 0,
//     precioNeto: function(){
//         return this.precio * (1 - this.descuento/100);
//     }
// }

// descuentos.precio = parseFloat(prompt('precio bruto'));
// descuentos.descuento = parseFloat(prompt('precio bruto'));
// console.log(`El precio neto es ${descuentos.precioNeto()} euros`)

// class Piedra{
//     constructor(masa, volumen) {
//         this.masa = masa;
//         this.volumen = volumen;
//     }
//     densidad(){
//         return this.masa/this.volumen
//     }
// }

// let oro = new Piedra(194, 10);
// console.log(`la densida del oro es ${oro.densidad()}`)


// class Efectivo{
//     constructor(nombre, saldo) {
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
//     ingresar(cantidad){
//         this.saldo += cantidad;
//     }

//     retirar(cantidad){
//         if(cantidad <= this.saldo){
//             this.saldo -= cantidad;
//         }
        
//     }
// }

// let miCuenta = new Efectivo('javier', 0);
// miCuenta.ingresar(1000);
// console.log(`Mi saldo actual es: ${miCuenta.saldo}`);

// miCuenta.retirar(100);
// console.log(`Mi saldo actual es: ${miCuenta.saldo}`);

// miCuenta.ingresar(200);
// console.log(`Mi saldo actual es: ${miCuenta.saldo}`);

// class Ficha{
//     constructor(nombre, sesiones, numsesiones){
//         this.nombre = nombre;
//         this.sesiones = [];
//         this.numsesiones = 0;
//     }
//     anotar(km){
//         this.sesiones[this.numsesiones] = km;
//         this.numsesiones++;
//     }

//     media(){
//         let media = 0;
//         for(let i = 0; i < this.sesiones.length; i++){
//             media += this.sesiones[i];
//         }
//         return media/this.numsesiones;
//     }
// }

// let newperson = new Ficha('Tomas');
// newperson.anotar(8);
// newperson.anotar(10);
// newperson.anotar(6);
// console.log(`Media de kilometros ${newperson.media()}`)

// class Figura{
//     constructor(color){
//         this.color = color;
//     }

//     obtenerColor(){
//         return this.color;
//     }
// }

// class Rectangulo extends Figura{
//     constructor(color, altura, ancho){
//         super(color);
//         this.ancho = ancho;
//         this.altura = altura;
//     }
//     calcularAreaRectangulo(){
//         return this.ancho * this.altura;
//     }
// }

// class Circulo extends Figura{
//     constructor(color, radio){
//         super(color);
//         this.radio = radio;
//     }
//     calcularAreaCirculo(){
//         return Math.PI * this.radio ** 2
//     }
// }

// class Triangulo extends Figura{
//     constructor(color, base, altura){
//         super(color);
//         this.base = base;
//         this.altura = altura;
//     }
//     calcularAreaTriangulo(){
//         return (this.base * this.altura)/2
//     }
// }

// let areaRectangulo = new Rectangulo('rojo', 5, 10);

// console.log(`Area del rectangulo es ${areaRectangulo.calcularAreaRectangulo()}`)

