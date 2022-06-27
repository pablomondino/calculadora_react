import logo from './logo.svg';
import './App.css';
import logoCalculadora from './imagenes/logo-calculadora.png';

import Boton from './componentes/Boton';

function App() {
  return (
    <div className="App">

    <div className='logo-contenedor'>
      <img
      src={logoCalculadora}
      className="logo"
      alt="logo de la calculadora"
      />
    </div>
    <div className='contenedor-calculadora'>
      <div className='fila'><Boton>1</Boton> <Boton>+</Boton></div>
      <div className='fila'>2</div>
      <div className='fila'>3</div>
      <div className='fila'>fila 4</div>
      <div className='fila'>clear</div>


    </div>
     

    </div>
  );
}

export default App;
