// Write your Character component here
import React from "react";

const Character = (props) => {
  const charInfo = props.char;

  return (
    <div>
      {charInfo.map((info) => {
        return (
          <div>
            <h2>{info.name}</h2>
            <p>Height: {info.height}</p>
            <p>Mass: {info.mass}</p>
            <p>Hair Color: {info.hair_color}</p>
            <p>Skin Color: {info.skin_color}</p>
            <p>Eye Color: {info.eye_color}</p>
            <p>Birth Year: {info.birth_year}</p>
            <p>Gender: {info.gender}</p>
            <p>Films: {info.films}</p>
            <p>Species: {props.charInfo.species}</p>
            <p>Vehicles: {props.charInfo.vehicles}</p>
            <p>Starships: {props.charInfo.starships}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Character;
