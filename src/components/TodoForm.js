import React, { useState, useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit} className='d-flex flex-row ml-1'>
      {props.edit ? (
        <>
          <Form.Control 
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='w-50 p-1'
          />
          <Button onClick={handleSubmit} variant="dark" className = 'ms-2'>
            Update
          </Button>
        </>
      ) : (
        <>
          <Form.Control
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='w-50 p-1'
            ref={inputRef}
          />
          <Button onClick={handleSubmit} variant="dark" className = 'ms-2'>
            Add todo
          </Button>
        </>
      )}
    </Form>
  );
}

export default TodoForm;
