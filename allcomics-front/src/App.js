import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './Router/Router';
import Navegacion from './Componentes/Navegacion';

function App() {
  return (
    <div className="App">
      <Navegacion/>
      <Rutas/>
    </div>
  );
}

export default App;
