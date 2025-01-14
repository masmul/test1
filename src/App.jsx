import React, { useState } from 'react';

    function App() {
      const [todos, setTodos] = useState([]);
      const [newTodo, setNewTodo] = useState('');

      const addTodo = () => {
        if (newTodo.trim() !== '') {
          setTodos([...todos, { text: newTodo, completed: false }]);
          setNewTodo('');
        }
      };

      const toggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) =>
          i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
      };

      const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
      };

      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
            <div className="flex mb-4">
              <input
                type="text"
                className="border p-2 mr-2 flex-1 rounded"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700" onClick={addTodo}>
                Add
              </button>
            </div>
            <ul>
              {todos.map((todo, index) => (
                <li key={index} className="flex justify-between items-center py-2 border-b">
                  <span
                    className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                    onClick={() => toggleTodo(index)}
                  >
                    {todo.text}
                  </span>
                  <div>
                    <button className="text-red-500 hover:text-red-700" onClick={() => deleteTodo(index)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    export default App;
