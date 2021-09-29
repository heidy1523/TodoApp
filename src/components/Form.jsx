import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
  // Estado del todo a ingresar - input
  const [todo, setTodo] = useState({
    
  });

  // Esta es mi lista de todos
  const [todos, setTodos] = useState([
    {
      todo:"Todo 1",
      complete: true,
    },

  ]);
/*const [TodoEdit, setTodoEdit] = useState[null]
const [todoEditText, setTodoEditText] = useState[""]*/
  // Esto maneja el cambio del input
  const handleChange = (e) => setTodo({ [e.target.name]: e.target.value });
  const handleChange2 = (e) => setTodo({ [e.target.name]: e.target.value });

  // Esto es cuando lo agrego - o doy enter
  const handleClick = (e) => {
    // Verifico que el input no este vacio
    if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
      alert('El campo no puede estar vacio.');
      return;
    }
    setTodos([...todos, todo]);
  };


  // Elimina el todo
  const deleteTodo = (index) => {

    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

  };
  

  const TodoEdit = (index )  => {

    const newEdit =[...todos];
    newEdit.splice(index, 1, todo );
    setTodos(newEdit);

  }

//agrega el checkbox
  const toggleComplete = (index) =>{
    const updateTodo = [...todos].map((index) => {
      if(index === todo ){
        index.complete = !index.complete
      }
      return index
    })
    setTodo(updateTodo)
    
  };


 /* const submitUpdate = complete=>{
    const updateTodo(edit.todo, complete);
    setEdit({
    todo= null,
    complete= ''
    });
  };
  if (edit.todo){
    return <Form edit={edit} onSubmit={submitUpdate}/>;
  }*/
  return (
    <>
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Escribe tus tareas pendientes</label>
      <br />
      <input type='text' name='todo' onChange={handleChange} />
      <button onClick={handleClick}>+</button>
    </form>

   

    {todos.map((value, index) => (
      <Todo
        todo={value.todo}
        key={index}
        index={index}
        deleteTodo={deleteTodo}
        TodoEdit={TodoEdit}
        handleChange={handleChange2}
        toggleComplete={toggleComplete}
      />
    ))}
  </>
);
};

export default Form;
