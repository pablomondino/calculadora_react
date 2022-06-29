import logo from './logo.svg';
import './App.css';
import logoCalculadora from './imagenes/logo-calculadora.png';
import {evaluate} from 'mathjs';

import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/botonClear';

import {useState} from 'react';


function App() {
 
 const[estadoPantalla, setEstadoPantalla]= useState("");

 const agregarEstadoPantalla = val=>{
setEstadoPantalla(estadoPantalla+val);
 }; 

 const calcularResultado =()=>{
  if (estadoPantalla){
  setEstadoPantalla(evaluate(estadoPantalla));
  }else{
    alert("Por favor ingrese un número para poder realizar un cálculo")
  }
}
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
      <Pantalla input={estadoPantalla}/>
      
      <div className='fila'>
        <Boton manejarClic={agregarEstadoPantalla} >1</Boton>
        <Boton manejarClic={agregarEstadoPantalla}>2</Boton>
        <Boton manejarClic={agregarEstadoPantalla}>3</Boton>
        <Boton manejarClic={agregarEstadoPantalla}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarEstadoPantalla}>4</Boton>
        <Boton manejarClic={agregarEstadoPantalla}>5</Boton>
        <Boton manejarClic={agregarEstadoPantalla}> 6</Boton>
        <Boton manejarClic={agregarEstadoPantalla}>-</Boton>
        </div>
      <div className='fila'>
        <Boton manejarClic={agregarEstadoPantalla}>7</Boton>
        <Boton manejarClic={agregarEstadoPantalla}>8</Boton>
        <Boton manejarClic={agregarEstadoPantalla}>9</Boton>
        <Boton manejarClic={agregarEstadoPantalla}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarEstadoPantalla}>0</Boton>
        <Boton manejarClic={agregarEstadoPantalla}>.</Boton>
        <Boton manejarClic={agregarEstadoPantalla}>/</Boton>
      </div>
     
     
     
     
      <div className='fila'>
      <BotonClear manejarClear={() => setEstadoPantalla('')}>
      Clear
      </BotonClear>
      </div>
 

    </div>
     

    </div>
  );
}

export default App;
