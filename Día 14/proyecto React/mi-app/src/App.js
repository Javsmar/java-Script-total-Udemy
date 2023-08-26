import React from 'react';  // Importa el módulo React desde la librería 'react'.

function App(props) {  // Declara un componente funcional llamado App. Recibe propiedades (props) como parámetros.

  let [contador, setearConteo] = React.useState(0);  // Declara una variable de estado 'contador' con valor inicial 0 y una función 'setearConteo' para actualizar el estado.

  function aumentarConteo(){  // Declara una función llamada 'aumentarConteo'.
    setearConteo(contador + 1);  // Usa la función 'setearConteo' para incrementar el valor del contador en 1.
  }

  return (
    <div style={{backgroundColor: props.colorFondo}}>  {/* Utiliza una etiqueta <div> con un estilo de fondo basado en la propiedad 'colorFondo' recibida como prop. */}
      <h1 style={{color: props.colorTexto}}>Contador: {contador}</h1>  {/* Utiliza una etiqueta <h1> con un estilo de color basado en la propiedad 'colorTexto' recibida como prop. Muestra el valor actual del contador. */}
      <button onClick={aumentarConteo}>Incrementar</button>  {/* Crea un botón que llama a la función 'aumentarConteo' cuando se hace clic en él. */}
    </div>
  );
}

export default App;  // Exporta el componente App para que pueda ser utilizado en otros archivos.

