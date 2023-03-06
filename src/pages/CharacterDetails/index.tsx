import React from "react";
import Layout from "../../components/Layout";
import useCharacter from "./character-hook";

const CharacterDetails = () => {
    const {
        character
    } = useCharacter();
    return (
        <Layout>
            <h1>Details Page :</h1>
            <h2>{character?.name}</h2>
        </Layout>
    );
};

export default CharacterDetails;