import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css'

import Character from './components/Character';

const App = () => {

  const [starChar, setStarChar] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      //console.log(res.data);
      setStarChar(res.data);
      
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character char={starChar} />
    </div>
  );
}

export default App;
