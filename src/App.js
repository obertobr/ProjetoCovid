import React from 'react'
import './styles/Header.css';
import './styles/Global.css'
import icon from '../src/icons/icon.svg'
import home from '../src/icons/home.svg'
import graph from '../src/icons/graph.svg'
import info from '../src/icons/info.svg'
import { useState } from 'react';
import axios from 'axios';

import { Home } from './components/Home';
import { Sobre } from './components/Sobre';
import { Analise } from './components/Analise';

function App() {

  let [homeOn,setHomeOn] = useState(true)
  let [analiseOn, setAnaliseOn] = useState(false)
  let [sobreOn, setSobreOn] = useState(false)
  
  let pegarDadosPorEstado = async (uf,date) => {

    let data = await axios.get(`http://localhost:4000/DadosCovid/${uf}/${date}`)

    return data
}

  let alterarConteudoMain = (area) => {

    if (area === "home") {

      setHomeOn(true)
      setAnaliseOn(false)
      setSobreOn(false)

    } else if (area === "analise") {

      setHomeOn(false)
      setAnaliseOn(true)
      setSobreOn(false)

    } else {

      setHomeOn(false)
      setAnaliseOn(false)
      setSobreOn(true)

    }

  }

  return (
    <>
      <div id="NavBar">
        <img id="icon" src={icon} alt="Lupa" />
        <img className='logo' onClick={() => alterarConteudoMain("home")} src={home} alt="Home"/>
        <img className='logo' onClick={() => alterarConteudoMain("analise")} src={graph} alt="Graficos"/>
        <img className='logo' onClick={() => alterarConteudoMain("sobre")} src={info} alt="Sobre"/>
      </div>

      <main>
        {
          homeOn ? (
          <>
            <Home pegarDadosPorEstado={(uf,date) => pegarDadosPorEstado(uf,date)}></Home>
           </>
          ) : analiseOn ? (<Analise pegarDadosPorEstado={(uf,date) => pegarDadosPorEstado(uf,date)}></Analise>) : 
          sobreOn ? (<Sobre></Sobre>) : ""
        }
      </main>
    </>
  );
}

export default App;
