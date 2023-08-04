import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
    
    return (
    totalTodos == completedTodos ?

      <h1 className='TodoCounter'>
        Has completado <span className='TodoQuantity'>{completedTodos}</span> de <span className='TodoQuantity'>{totalTodos}</span> Pendientes!
      </h1>

      :

      <h1 className='TodoCounter'>Felicidades, completaste tus pendientes!</h1>
    );
}

export { TodoCounter }; 