import React from "react";
import './TodoForm.css'

function TodoForm() {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Agrega un nuevo pendiente!</label>
            <textarea
                placeholder="Comer una manzana azul" 
            />
        <div className="TodoForm-buttonContainer">
            <button type="" className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
            <button type="submit"
            className="TodoForm-button TodoForm-button--add"
            >Añadir</button>
        </div>
            
        </form>
    );
}

export { TodoForm };