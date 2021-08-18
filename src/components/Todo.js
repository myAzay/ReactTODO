import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { Alert, Container } from 'react-bootstrap';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo, filterToDo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  const completedTodos = todos.filter((todo) => {return todo.isComplete});
  const unCompletedTodos = todos.filter((todo) => {return !todo.isComplete});

  if(filterToDo === 'completedTodos'){
    todos = completedTodos;
  }else if(filterToDo === 'unCompleteTodos'){
    todos = unCompletedTodos;
  }

  return (todos.map((todo, index) => (
    <Alert 
      className={todo.isComplete 
        ? 'd-flex justify-content-space-between align-items-center m-2 p-1 text-decoration-line-through' 
        : 'd-flex justify-content-space-between align-items-between m-2 p-1'}
      key={index}
      variant={todo.isComplete ? 'success ' : 'primary'}
    >
      <Container key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </Container>
      <Container className='mr-auto' style={{ width: '8vh' }}> 
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon '
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </Container>
    </Alert>
  )));
};

export default Todo;
