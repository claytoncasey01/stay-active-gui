import { useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Mover from "./components/mover";

function App() {
  const [moving, setMoving] = useState(false);
  const handleClick = () => {
    setMoving(true);
  }
  return (
    <div className="App">
      <Mover moveDelay={{ low: 10, high: 60}} isMoving={moving}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          Moving: {moving ? "moving" : "Not moving"}
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <button type="button" onClick={handleClick}>Basic Test</button>
      </header>
    </div>
  )
}

export default App
