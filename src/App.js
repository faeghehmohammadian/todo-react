import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState('');

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

  const startEditing = (id, text) => {
    setEditingTodoId(id);
    setEditedTodoText(text);
  };

  const cancelEditing = () => {
    setEditingTodoId(null);
    setEditedTodoText('');
  };

  const saveEditedTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: editedTodoText };
        } else {
          return todo;
        }
      })
    );
    setEditingTodoId(null);
    setEditedTodoText('');
  };

  function handleFilterChange(value) {
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
      <form
        className='formClass'
        onSubmit={(e) => {
          e.preventDefault();
          const text = e.target.elements.todoInput.value;
          if (text) {
            addTodo(text);
            e.target.elements.todoInput.value = '';
          }
        }}
      >
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
        <div style={{ width: '90%' }} key={todo.id} className={todo.completed ? 'completed' : ''}>
          {editingTodoId === todo.id ? (
            <div className='todoRowBox'>
              <input
                type="text"
                value={editedTodoText}
                onChange={(e) => setEditedTodoText(e.target.value)}
              />
              <button className='confirmEditButton' onClick={() => saveEditedTodo(todo.id)}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button className='cancelEditButton' onClick={() => cancelEditing()}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          ) : (
            <div className='todoRowBox'>
              <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
              <div className='todoRowText'>{todo.text}</div>
              <button className='editButton' onClick={() => startEditing(todo.id, todo.text)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className='deleteButton' onClick={() => removeTodo(todo.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoApp;