let empleados = [];


function Empleado(legajo, nombre, apellido, fechanacimeiento, cargo){
    this.legajo = legajo,
    this.nombre = nombre,
    this.apellido = apellido,
    this.fechanacimeiento = fechanacimeiento,
    this.cargo = cargo
}

function cargarEmpleado(){
    let textLegajo = document.getElementById('legajo').value;
    let textNombre = document.getElementById('nombre').value;
    let textApellido = document.getElementById('apellido').value;
    let textFechaNacimiento = document.getElementById('fechaNacimiento').value;
    let textCargo = document.getElementById('cargo').value;

    let employed = new Empleado(textLegajo, textNombre, textApellido, textFechaNacimiento, textCargo);
    empleados.push(employed);
    alert('Empleado Agregado');
    limpiarCampos();
}


function mostrarEmpleado(){
    let textListEmployed = document.getElementById('listadoEmple')
    let listaEmpleados = '';
    for(item of empleados){
        for(let i in item){
            listaEmpleados += `${i}: ${item[i]}, `;
        }
        listaEmpleados = listaEmpleados + '\n';
    };
    textListEmployed.textContent = listaEmpleados.toUpperCase();
    // alert(listaEmpleados);
}

function limpiarCampos(){
    document.getElementById('legajo').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('cargo').value = '';
}