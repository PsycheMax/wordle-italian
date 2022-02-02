import './App.css';
import APIManager from './components/api/APIManager';
import GameManager from './components/GameManager'

function App() {
  return (
    <div className="App bg-zinc-50 dark:bg-zinc-900 w-full h-full">
      {/* <GameManager /> */}

      <APIManager />

    </div>
  );
}

export default App;
