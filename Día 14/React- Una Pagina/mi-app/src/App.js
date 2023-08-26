import React from 'react';

import Saludo from "./saludo";
import Mensaje from './Mensaje';


function App(){
  return (
    <div>
      <Saludo nombre = 'javs'/>
      <Mensaje mensaje = 'Bienvenido a mi aplicación React'/>
    </div>
  )
}
export default App;