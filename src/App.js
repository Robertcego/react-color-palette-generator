import logo from './logo.svg';
import './App.css';
import PaletteGeneratorComponent from './components/PaletteGeneratorComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PaletteGeneratorComponent/>
      </header>
    </div>
  );
}

export default App;
