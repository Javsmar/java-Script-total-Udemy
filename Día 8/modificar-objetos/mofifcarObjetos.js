let perro = {
    nombre:'simba',
    raza: 'Shih Tzu',
    edad: 4,
    ladrar(){
        console.log('Guau')
    },
    saludar(){
        console.log('Hola me llamo ' + this.nombre)
    }
}

let perro2 = {
    nombre:'Reina',
    raza: 'Caniche',
    edad: 15,
    ladrar(){
        console.log('Guau')
    },
    saludar(){
        console.log('Hola me llamo ' + this.nombre)
    }
}


let automovil = { 
    marca: 'Ford', 
    modelo: 'Fiesta', 
    anio: 2015, 
    informacion() { 
        console.log("Marca: " + this.marca + ", Modelo: " + this.modelo) 
        
    }
};

let polo = { 
    marca: 'Lacoste', 
    color: 'Azul', 
    talle: 'L', 
    fabricar() { 
        console.log("Polo " + this.marca + " fabricado") 
        
    }
};

// perro['colorOjos'] = 'marron'; // asi se declara un nuevo elemento dentro del objeto



// let exerciseOne = {
//     nombre: 'Javier',
//     apellido: 'Espinosa',
//     Bootcamp: ['Git', 'Fundamentos HTML, CSS', 'JavaScript'],
//     busquedActiva: true,
//     redSocial: [{
//         nombre: 'Github',
//         link: 'https://github.com/'
//     }]
// }