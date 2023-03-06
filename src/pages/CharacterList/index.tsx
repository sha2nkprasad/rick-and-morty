import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Grid, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import useCharacters from './characters-hook';
import Layout from '../../components/Layout';
import Backdrop from '../../components/Backdrop';

const CharacterList = () => {
    const {
        name,
        species,
        characters,
        metadata,
        loading,
        page,
        pageCount,
        handlePageChange,
    } = useCharacters();
    const navigate = useNavigate();

    const handleRedirection = (id: string) => {
        navigate(`/characters/${id}`);
    };

    return (
        <Layout>
            <Box margin={4}>
                {loading ? (
                    <Backdrop open />
                ) : (
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
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.54)',
                                                }}
                                                aria-label={`info about ${
                                                    character?.name || 'name'
                                                }`}
                                                onClick={() =>
                                                    handleRedirection(
                                                        character?.id || ''
                                                    )
                                                }
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            );
                        })}
                    </ImageList>
                )}
            </Box>
            <Box display="flex" justifyContent="flex-end" padding="16px">
                <Pagination
                    count={pageCount}
                    page={page}
                    onChange={handlePageChange}
                    defaultPage={1}
                />
            </Box>
        </Layout>
    );
};

export default CharacterList;
