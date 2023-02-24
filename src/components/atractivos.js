import React from 'react';

function Atractivos(){
  return(
    <div className='contenedor-atractivo'>
      <img className='imagen-atractivo' src={require('../images/chan-chan.jpg')} alt='Foto de Chan Chan' />
      <div className='contenedor-texto-actractivo'>
        <p className='nombre-atractivo'>Ruinas de Chan Chan</p>
        <p className='ubicacion-atractivo'>Trujillo, La Libertad</p>
        <p className='texto-atractivo'>Chan Chan es una ciudad precolombina de adobe, construida en la costa norte del Perú por los chimúes. Es la ciudad construida en adobe más grande de América y del mundo. Se ubica al noroeste del área metropolitana de Trujillo entre los distritos de Trujillo y Huanchaco.</p>
      </div>
    </div>
  );
}

export default Atractivos;