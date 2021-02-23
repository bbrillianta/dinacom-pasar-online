import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //untuk kondisi jumlah user saat ini
  const [username, setUsername] = useState("");
  
  function formUsername(event) {
    setUsername(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" onChange={formUsername}></input>
        <p>{username}</p>
        <form style={{ display: "flex", flexDirection: "column", backgroundColor: 'white', width: "100%", alignItems: "Center" }}>
          <input type="text" style={{width: "500px"}}></input>
          <input type="text" style={{width: "500px"}}></input>
        </form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
