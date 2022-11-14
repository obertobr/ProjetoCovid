import React from 'react'
import './App.css';
import icon from '../src/icons/icon.svg'
import home from '../src/icons/home.svg'
import graph from '../src/icons/graph.svg'
import info from '../src/icons/info.svg'

function App() {
  return (
    <>
      <div id="NavBar">
        <img id="icon" src={icon} alt="Lupa"/>
        <img src={home} alt="Home"/>
        <img src={graph} alt="Graficos"/>
        <img src={info} alt="Sobre"/>
      </div>
    </>
  );
}

export default App;
