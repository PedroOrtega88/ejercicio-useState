import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("Sofía");
  const [newName, setNewName] = useState('');

  const handleClick = (newTeacherName) => {
    setName(newTeacherName);
  };

  return (
    <div>
      <h2>Teacher Name: {name}</h2>
      <ul>
        <li onClick={() => handleClick("Data")}>Data</li>
        <li onClick={() => handleClick("Reyes")}>Reyes</li>
        <li onClick={() => handleClick("Yolanda")}>Yolanda</li>
        
      </ul>
    </div>
  );
}

export default App;
