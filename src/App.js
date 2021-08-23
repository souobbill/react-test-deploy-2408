import logo from './logo.png';
import log3iac from './log3iac.png';
import logiuc from './logiuc.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <p>
          TEST DE L'APPLICATION <code>,REACT_TEST </code>.
        </p>
        <img src={logiuc} className="" alt="log" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={log3iac} className="" alt="logo" />
        <p>
          FORMATION <code>,CERTIFICATION </code> POUR VOUS.
        </p>
        <p>
          ###<code> Version 1.1 </code> ###
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="Wouri Teck Link"
        >
          Welcome To WOURI_TECH
        </a>
      </header>
    </div>
  );
}

export default App;
