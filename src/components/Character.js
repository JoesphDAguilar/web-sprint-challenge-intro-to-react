// Write your Character component here
import React from "react"

const Character = props => {
    const { charInfo } = props 

    return (
        <h2>{charInfo.name}</h2>
    )
}

export default Character;
