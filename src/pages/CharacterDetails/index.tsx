import React from "react";
import Backdrop from "../../components/Backdrop";
import Layout from "../../components/Layout";
import useCharacter from "./character-hook";

const CharacterDetails = () => {
    const {
        loading,
        character
    } = useCharacter();

    if(loading) {
        return <Backdrop open />;
    }
    
    return (
        <Layout>
            <h1>Details Page :</h1>
            <h2>{character?.name}</h2>
        </Layout>
    );
};

export default CharacterDetails;