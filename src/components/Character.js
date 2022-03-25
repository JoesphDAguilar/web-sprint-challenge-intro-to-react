// Write your Character component here
import React from "react";

function Character(props) {

  return (
          <div>
            <h2>{props.data.name}</h2>
            <p>Height: {props.data.height}</p>
            <p>Mass: {props.data.mass}</p>
            <p>Hair Color: {props.data.hair_color}</p>
            <p>Skin Color: {props.data.skin_color}</p>
            <p>Eye Color: {props.data.eye_color}</p>
            <p>Birth Year: {props.data.birth_year}</p>
            <p>Gender: {props.data.gender}</p>
            {/* <p>Films: {props.data.films}</p>
            <p>Species: {props.data.species}</p>
            <p>Vehicles: {props.data.vehicles}</p>
            <p>Starships: {props.data.starships}</p> */}
          </div>
        )
};

export default Character;
