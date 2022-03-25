import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css'

import Character from './components/Character';
import CharacterDetails from './components/CharacterDetails';

const App = () => {

  const [starChar, setStarChar] = useState(null);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res.data.results);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
