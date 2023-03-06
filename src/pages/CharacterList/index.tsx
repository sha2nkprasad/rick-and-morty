import React from "react";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from "@mui/material";
import useCharacters from "./characters-hook";
import CharacterCard from "../../components/Card";
import Layout from '../../components/Layout';
import InfoIcon from '@mui/icons-material/Info';
import Backdrop from "../../components/Backdrop";

const CharacterList = () => {

    const {
        name,
        species,
        characters,
        metadata,
        loading
    } = useCharacters();
    const navigate = useNavigate();

    const handleRedirection = (id: string) => {
        navigate(`/characters/${id}`);
    };

    if(loading) {
        return <Backdrop open />;
    }

    return (
        <Layout>
            <Box margin={4}>
                <ImageList cols={4} gap={24}>
                    {characters?.map((character) => {
                        return (
                            <ImageListItem key={character?.id}>
                                <img
                                    src={character?.image || ''}
                                    alt={character?.name || ''}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={character?.name || ''}
                                    subtitle={character?.species || ''}
                                    actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${character?.name || 'name'}`}
                                        onClick={() => handleRedirection(character?.id || '')}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                    }
                                />
                            </ImageListItem>
                        )
                    })}
                </ImageList>
            </Box>
        </Layout>
    );
};

export default CharacterList;