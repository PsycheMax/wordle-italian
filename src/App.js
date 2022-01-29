import logo from './logo.svg';
import './App.css';
import GameManager from './components/GameManager'

function App() {
  return (
    <div className="App bg-zinc-50 dark:bg-zinc-900 w-full h-full">
      <GameManager />
      {/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
