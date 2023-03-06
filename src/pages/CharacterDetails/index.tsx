import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Backdrop from '../../components/Backdrop';
import Layout from '../../components/Layout';
import useCharacter from './character-hook';
import CharacterCard from '../../components/Card';
import EpisodeCard from '../../components/EpisodeCard';

const CharacterDetails = () => {
    const { loading, character } = useCharacter();

    return (
        <Layout>
            {loading ? (
                <Backdrop open />
            ) : (
                <>
                    <Box margin={4}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                Back to List
                            </Link>
                            <Typography color="text.primary">
                                Character Details
                            </Typography>
                        </Breadcrumbs>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        padding="16px"
                    >
                        <Box>
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
                            />
                        </Box>
                        <Box>
                            <EpisodeCard episodes={character?.episode || []} />
                        </Box>
                    </Box>
                </>
            )}
        </Layout>
    );
};

export default CharacterDetails;
