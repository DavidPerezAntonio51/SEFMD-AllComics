import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './Router/Router';
import Navegacion from './Componentes/Navegacion';
import { UserProvider } from './Contextos/LoginContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navegacion />
        <Rutas />
      </UserProvider>
    </div>
  );
}

export default App;
