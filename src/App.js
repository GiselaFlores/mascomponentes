import './App.css';
import Acceder from './componentes/Acceder';
import Saludar from './componentes/Saludar';


function App() {
  return (
    <div className="App">
      <h1 className='text-center'>Hola</h1>

        <Acceder tieneAcceso={false} />
        <Saludar/>
      
    </div>
  );
}

export default App;
