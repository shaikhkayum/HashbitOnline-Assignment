import React, { useState } from 'react';

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    const newList = [...todoList, task];
    // Requirement: Ascending order
    newList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    setTodoList(newList);
    setTask(""); 
  };

  const removeTask = (indexToRemove) => {
    const filteredList = todoList.filter((_, index) => index !== indexToRemove);
    setTodoList(filteredList);
  };

  return (
    /* This main wrapper centers everything on the screen */
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100vw',        // Full viewport width
      minHeight: '100vh',    // Full viewport height
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        padding: '20px', 
        border: '1px solid #555', 
        borderRadius: '12px',
        backgroundColor: '#1a1a1a', // Matching your dark theme
        color: 'white',
        minWidth: '350px',
        textAlign: 'center',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
      }}>
        <h2>Todo List</h2>
        
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            style={{ 
              padding: '10px', 
              flex: 1, 
              borderRadius: '5px', 
              border: '1px solid #444',
              backgroundColor: '#333',
              color: 'white'
            }}
          />
          <button 
            onClick={addTask} 
            style={{ 
              padding: '10px 15px', 
              cursor: 'pointer',
              backgroundColor: '#646cff',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todoList.map((item, index) => (
            <li key={index} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: '1px solid #444'
            }}>
              <span>{item}</span>
              <button 
                onClick={() => removeTask(index)} 
                style={{ 
                  backgroundColor: '#ff4d4d', 
                  color: 'white', 
                  border: 'none', 
                  padding: '5px 10px', 
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        
        {todoList.length === 0 && (
          <p style={{ color: '#888', marginTop: '10px' }}>No tasks yet. Add one!</p>
        )}
      </div>
    </div>
  );
};

export default TodoApp;