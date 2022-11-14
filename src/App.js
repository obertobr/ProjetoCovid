import React, { useEffect } from 'react'
import './App.css';
import axios from 'axios';
import icon from '../src/icons/icon.svg'
import home from '../src/icons/home.svg'
import graph from '../src/icons/graph.svg'
import info from '../src/icons/info.svg'


const token = "b8075c2278f4fbd8c647965245d83431fcafc758"

function App() {
  useEffect(() =>{
    axios.get(`https://api.brasil.io/v1/dataset/covid19/caso/data/?state=SP&is_last=True&place_type=state`, {
      headers: {
        Authorization: 'Token ' + token
      }
    })
      .then(res => {
        console.log(res.data);
      })
  }, [])

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
