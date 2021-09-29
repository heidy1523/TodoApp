
import React from 'react';

const Todo = ({ todo, index, deleteTodo, TodoEdit, toggleComplete,handleChange}) => {
  
  return (
    <>

      < div className='list'>
        <h3>{todo}</h3>
        <input 
          type= "checkbox" 
          onChange={()=>toggleComplete(index)}
          checked={index}/>

        <button className='btn-delete' onClick={() => deleteTodo(index)}>
          x
        </button>
      

            <button className='btn-edit' id='cosa' onClick={()=>TodoEdit(index)}>
              guardar
            </button> <input type='text' placeholder="editar" name = 'todo' onChange={handleChange}/>
            
      </div>
    </>
  );
};

export default Todo;

