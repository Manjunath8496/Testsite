import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my Fisrt Deployed Site...
        </p>
        <a
          className="App-link"
          href="https://navnathkamble.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Navnath Kamble - SDET
        </a>
      </header>
    </div>
  );
}

export default App;
