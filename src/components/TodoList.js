import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { Form } from 'react-bootstrap';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setfilter] = useState("all");

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const filterChange = text => {
    setfilter(text);
    
  }
  return (
    <div className = 'mx-4' style={{ height: '94vh' }} >
      <h1 >What's the plan?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        filterToDo={filter}
      />
      <Form.Check
        inline
        defaultChecked 
        label="All"
        name="group1"
        type="radio"
        onChange = {() => {filterChange("all")}}
      />
      <Form.Check
        inline
        label="Completed Tasks"
        name="group1"
        type="radio"
        onChange = {() => {filterChange("completedTodos")}}
      />
      <Form.Check
        inline
        name="group1"
        label="UnComplete Tasks"
        type="radio"
        onChange = {() => {filterChange("unCompleteTodos")}}
      />
    </div>
  );
}

export default TodoList;
