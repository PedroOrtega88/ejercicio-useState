import './App.css'

function App() {
    const [name, setName] = useState("Sofía");
}
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




export default App
