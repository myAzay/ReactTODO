import React from 'react';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <TodoList /> 
        </div>
    );
};

export default HomePage;