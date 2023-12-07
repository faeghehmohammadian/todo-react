import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

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

  function handleFilterChange(value) {
    // Update the filter state based on the value
    setFilter(value);
  }

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
      

      <div className="filters">
        <select value={filter} onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="all" className={filter === 'all' ? 'active' : ''}>
            All
          </option>
          <option value="active" className={filter === 'active' ? 'active' : ''}>
            Active
          </option>
          <option value="completed" className={filter === 'completed' ? 'active' : ''}>
            Completed
          </option>
        </select>
      </div>
      </form>
        {filteredTodos.map((todo) => (
          <div style={{ width: '100%' }} key={todo.id} className={todo.completed ? 'completed' : ''}>
            <div className='todoRowBox'>
              <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
              <div className='todoRowText'>{todo.text}</div>
              <button className='editButton' onClick={() => removeTodo(todo.id)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className='deleteButton' onClick={() => removeTodo(todo.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>

    
  );
};

export default TodoApp;