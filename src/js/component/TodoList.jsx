import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    if (e.key === 'Enter' && newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de TODO</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleAddTask}
        placeholder="Nueva tarea"
      />
      <ul>
        {tasks.length === 0 ? (
          <li>No hay tareas, añadir tareas</li>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              style={{ position: 'relative', padding: '5px 0' }}
              onMouseEnter={(e) => e.currentTarget.querySelector('button').style.display = 'inline'}
              onMouseLeave={(e) => e.currentTarget.querySelector('button').style.display = 'none'}
            >
              {task}
              <button
                onClick={() => handleDeleteTask(index)}
                style={{ display: 'none', marginLeft: '10px', cursor: 'pointer' }}
              >
                Eliminar
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;