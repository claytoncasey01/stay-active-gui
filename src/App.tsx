import {useEffect, useState} from 'react'
import {invoke} from "@tauri-apps/api";
import logo from './logo.svg'
import './App.css'

function App() {
  const [moving, setMoving] = useState(false);
  const handleClick = () => {
    setMoving(!moving);
  }
  useEffect(() => {
    if (moving) {
      invoke('start_move', { delay: 5});
    } else {
      invoke('stop_move').then(res => console.log('Sent stop moving command'));
    }
  }, [moving]);

  return (
    <div className="App">
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
        <button type="button" onClick={handleClick}>{moving ? 'Stop' : 'Start'}</button>
      </header>
    </div>
  )
}

export default App
