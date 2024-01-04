import './App.css';
import HelloWorld from './components/HelloWorld';
import Profissional from './components/Profissional';

function App() {
  // JSX
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      <HelloWorld />
      <Profissional
        foto="https://github.com/Rodrigo55pereira.png"
        nome="Rodrigo"
        profissao="Professor"
        idade="32"
      />
      {/*</header>*/}
    </div>
  );
}

export default App;
