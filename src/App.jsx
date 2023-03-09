import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [state, setState] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

  return (
    <div className="App">
      <div className="information">
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Age</label>
        <input
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label>State</label>
        <input
          type="text"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <label>Position</label>
        <input
          type="text"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <label>Salary</label>
        <input
          type="number"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        />
        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
