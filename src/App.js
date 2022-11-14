import React, { useEffect } from 'react'
import './App.css';
import axios from 'axios';

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
    <div className="App">
      
    </div>
  );
}

export default App;
