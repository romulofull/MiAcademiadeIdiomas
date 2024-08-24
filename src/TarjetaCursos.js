import React from 'react';

function TarjetaCursos({ id, nombre, foto,  precio, fechaEmpezar, niveles }) {
  return (
    <div className="tarjeta-cursos">
      <h2>{nombre}</h2>
      <img src={foto}/>
       <p>Precio: {precio}</p>
      <p>Fecha de Inicio: {fechaEmpezar}</p>
      <p>Niveles: {niveles}</p> 
    </div>
  );
}

export default TarjetaCursos;