import React, { useState } from 'react';
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    setTodos([...todos, { id: Math.random(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return false;
  });

  return (
    <div className="todo-app">
      <h1>My Todos</h1>

      <form className='formClass' onSubmit={(e) => {
        e.preventDefault();
        const text = e.target.elements.todoInput.value;
        if (text) {
          addTodo(text);
          e.target.elements.todoInput.value = '';
        }
      }}>
        <input type="text" placeholder="Enter a todo" id="todoInput" />
        <button type="submit">Save</button>
      </form>

      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => handleFilterChange('active')}
        >
          Active
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </button>
      </div>


        {filteredTodos.map((todo) => (
          <div style={{ width: '100%' }} key={todo.id} className={todo.completed ? 'completed' : ''}>
            <div className='todoRowBox'>
            <input 
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <div className='todoRowText'>{todo.text}</div>
            <button className='deleteButton' onClick={() => removeTodo(todo.id)}>X</button>
          </div>
          </div>
        ))}
      </div>

    
  );
};

export default TodoApp;
