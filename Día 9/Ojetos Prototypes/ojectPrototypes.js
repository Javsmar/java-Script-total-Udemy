// function Libro(autor, titulo, cantPaginas){
//     this.autor = autor;
//     this.titulo = titulo;
//     this.cantPaginas = cantPaginas;
// }

// let libro1 = new Libro('gabriel garcia marquez', '100 años de soledad', 400);
// let libro2 = Object.create(libro1);

// let libro3 = new libro1.constructor('benedetti', 'poemas', 200);

// function Restaurante(nombre, direccion, ciudad){
//     this.nombre = nombre;
//     this.direccion = direccion;
//     this.ciudad = ciudad;
// }

// let restaurante1 = new Restaurante('ginos', 'calle valencia 4', 'barcelona');
// let restaurante2 = new restaurante1.constructor('vips', 'calle benlliure 5', 'cerdanyola');


//modificar prototypes

function Libro(autor, titulo, cantPaginas){
    this.autor = autor;
    this.titulo = titulo;
    this.cantPaginas = cantPaginas;
}

let libro1 = new Libro('gabriel garcia marquez', '100 años de soledad', 400);
// lo modificamos no solo al opbjeto literal libro  si no que tambien a toda la cadena de herencia en prototype
Libro.prototype.abrirLibro = function(){
    alert(this.titulo + ' ha sido abierto')
}

function Videojuego(nombre, empresa, anioLanzamiento) {
    this.nombre = nombre;
    this.empresa = empresa;
    this.anioLanzamiento = anioLanzamiento;
}

let videojuego1 = new Videojuego('Mario Bros', 'Nintendo', 1983);
Videojuego.prototype.play = function(){
    console.log(this.nombre + ' ha sido iniciado')
};