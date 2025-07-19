import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage when the app starts
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    // Save tasks to localStorage every time tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: input.trim(),
      createdAt: Date.now(),
    };

    setTasks([...tasks, newTask]);
    setInput('');

    // Schedule auto-delete after 24 hours
    setTimeout(() => {
      deleteTask(newTask.id);
    }, 24 * 60 * 60 * 1000); // 24 hours in ms
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Timer to update remaining time
  const getRemainingTime = (task) => {
    const msLeft = task.createdAt + 24 * 60 * 60 * 1000 - Date.now();
    if (msLeft <= 0) return 'Expired';
    const hours = Math.floor(msLeft / (1000 * 60 * 60));
    const minutes = Math.floor((msLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((msLeft % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTasks([...tasks]); // Trigger re-render to update timers
    }, 1000);
    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="home">
      <h1>My To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} — <span className="timer">{getRemainingTime(task)}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
