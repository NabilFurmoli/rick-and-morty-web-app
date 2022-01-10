/* Module Imports */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Component Imports */
import Home from './characters/pages/Home';
import Navigetor from './shared/components/header/Navigetor';

/* CSS Imports */
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigetor/>
      <Home/>
    </div>
  );
}

export default App;
