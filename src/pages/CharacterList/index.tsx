import React from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from "@mui/material";
import useCharacters from "./characters-hook";
import CharacterCard from "../../components/Card";

const CharacterList = () => {

    const {
        name,
        species,
        characters,
        metadata
    } = useCharacters();
    const navigate = useNavigate();

    const handleRedirection = (id: string) => {
        navigate(`/characters/${id}`);
    };

    return (
        <div>
            <Typography gutterBottom variant="h3" component="div" align="center">
                The Rick and Morty App
            </Typography>
            <Grid container m={4}>
            {characters?.map((character) => {
                    return (
                        <Grid item xs={6} md={3} mb={2} key={character?.id}>
                            <CharacterCard
                                id={character?.id || ''}
                                imageURL={character?.image || ''}
                                name={character?.name || ''}
                                status={character?.status || ''}
                                species={character?.species || ''}
                                type={character?.type || ''}
                                gender={character?.gender || ''}
                                origin={character?.origin?.name || ''}
                                location={character?.location?.name || ''}
                                created={character?.created || ''}
                                handleAction={handleRedirection}
                            />
                        </Grid>
                    )
                 })}
        </Grid>
        </div>
    );
};

export default CharacterList;