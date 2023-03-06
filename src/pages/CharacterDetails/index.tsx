import React from "react";
import useCharacter from "./character-hook";

const CharacterDetails = () => {
    const {
        character
    } = useCharacter();
    return (
        <div>
            <h1>Details Page :</h1>
            <h2>{character?.name}</h2>
        </div>
    );
};

export default CharacterDetails;