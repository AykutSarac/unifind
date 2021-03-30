import './App.css';
import Header from './components/layout/Header';
import Results from './components/unis/Results';
import UniState from './context/unis/UniState'

function App() {
  return (
    <UniState>
      <div className="App">
        <Header />
        <Results />
      </div>
    </UniState>
  );
}

export default App;
