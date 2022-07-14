import './App.css';
import Testimonio from "./componentes/Testimonio"
import USERS from "./usuarios.js"
import React from 'react';

function App() {

  console.log(USERS)

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp</h1>

        {
          USERS.map(usuarioSingle =>
            <Testimonio objUsuario={usuarioSingle}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
