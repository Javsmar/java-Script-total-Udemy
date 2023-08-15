//get = obtenemos los valores de las propiedades 'el valor actual de una prpoiedad'
//set = para establecer nuevos valores de las propiedades de un obcjet obtenemos
//'nuevo valor de una propiedad'

class Deportista{
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Futbolista extends Deportista{
    constructor(nombre, apellido, goles) {
        super(nombre, apellido);
        this._goles = goles;
    }

    get goles(){
        return this._goles;
    }

    set goles(newGols){
        this._goles = newGols;
    }
}

let futbolista1 = new Futbolista('lionel', 'messi', 12);

