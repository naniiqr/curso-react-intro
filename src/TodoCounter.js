import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return (

    total == completed ?
      
      <h1 className='TodoCounter'>Felicidades, completaste tus pendientes!</h1>

      :
        
      <h1 className='TodoCounter'>
        Has completado <span className='TodoQuantity'>{completed}</span> de <span className='TodoQuantity'>{total}</span> Pendientes!
      </h1>
    );
}

export { TodoCounter }; 