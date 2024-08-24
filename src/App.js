import React from 'react';
import TarjetaCursos from './TarjetaCursos';
import FormularioCursos from './FormularioCursos';
import gallery from './assests/gallery';
import './estilos.css';

const ofertacursos = [
  { id: 1, nombre: 'Alemán', foto: gallery.imagen1, precio: '$250', fechaEmpezar: '2024-10-01', niveles: 'B22' },
{ id: 2, nombre: 'Inglés', foto: gallery.imagen2,  precio: '$180', fechaEmpezar: '2024-10-01', niveles: 'A22'  },
  { id: 3, nombre: 'Español', foto: gallery.imagen3, precio: '$220', fechaEmpezar: '2024-11-01', niveles: 'A12'  },
  { id: 4, nombre: 'Italiano', foto: gallery.imagen4, precio: '$240', fechaEmpezar: '2024-10-01', niveles: 'A22'  },
  { id: 5, nombre: 'Portugués', foto: gallery.imagen5, precio: '$200', fechaEmpezar: '2024-10-01', niveles: 'B22'  },
  { id: 6, nombre: 'Frances',foto: gallery.imagen6, precio: '$190', fechaEmpezar: '2025-02-01', niveles:'A22'  },]


function App() {
  return (
    <div className="App">
      <h1>Academia de Idiomas</h1>
    <div className="cursos-container">
        {ofertacursos.map(curso => (
          <TarjetaCursos key={curso.id} nombre={curso.nombre} foto={curso.foto} precio={curso.precio} fechaEmpezar={curso.fechaEmpezar} niveles={curso.niveles} className="tarjeta.cursos"/>
        ))}
      </div>
      <FormularioCursos/>  
    </div> 
  );
}

export default App;