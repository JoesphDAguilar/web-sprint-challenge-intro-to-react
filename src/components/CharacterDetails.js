import React from "react";

const CharacterDetails = props => {
    return (
        <div>
            <button>Details</button>
            <p>Height: {props.charInfo[0].height}</p>
            <p>Mass: {props.charInfo[0].mass}</p>
            <p>Hair Color: {props.charInfo[0].hair_color}</p>
            <p>Skin Color: {props.charInfo[0].skin_color}</p>
            <p>Eye Color: {props.charInfo[0].eye_color}</p>
            <p>Birth Year: {props.charInfo[0].birth_year}</p>
            <p>Gender: {props.charInfo[0].gender}</p>
            <p>Films: {props.charInfo[0].films}</p>
            <p>Species: {props.charInfo[0].species}</p>
            <p>Vehicles: {props.charInfo[0].vehicles}</p>
            <p>Starships: {props.charInfo[0].starships}</p>
            <button>Close</button>
        </div>
    )
}

export default CharacterDetails;