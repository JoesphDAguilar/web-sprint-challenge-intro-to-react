import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css'

import Character from './components/Character';

const App = () => {

  const [starChar, setStarChar] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      //console.log(({data}));
      setStarChar(res.data.results);
      
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {starChar.map((char, idx) => 
      <Character key={char.name} data={starChar[idx]} /> 
      )}
    </div>
  );
}


export default App;
