import React, { Fragment, useState } from 'react';

function App() {
  const [name, setName] = useState("Sofía");

  const handleClick = (newTeacherName) => {
    setName(newTeacherName);
  };

  return (
    <Fragment>
    <div>
      <h2>Nombre del profesor: {name}</h2>
      <ul>
        <li onClick={() => handleClick("Data")}>Data</li>
        <li onClick={() => handleClick("Reyes")}>Reyes</li>
        <li onClick={() => handleClick("Yolanda")}>Yolanda</li>
      </ul>
    </div>
    
    </Fragment>

  );
}

export default App;