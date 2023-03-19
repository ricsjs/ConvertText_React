import logo from './logo.svg';
import './App.css';
import CapsLock from './components/capslock';

function App() {
  return (
    <div className="App">
      <h1>Conversor de texto</h1>
      <div class="linha">
      <CapsLock texto1="Minúsculo" texto2="Maiúsculo"></CapsLock>
      </div>
    </div>

    
  );
}

export default App;
