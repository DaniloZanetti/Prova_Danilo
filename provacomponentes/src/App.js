import Noticia from './componentes/noticias';
import Categorias from './componentes/categorias';
import './App.css';

function App() {
  return (
    <div className="App">
       <Noticia/>
       <Categorias categoria="Futbol"/>
    </div>
  );
}

export default App;
