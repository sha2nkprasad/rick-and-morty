import React from "react";
import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import useCharacters from "./characters-hook";

const CharacterList = () => {

    const {
        name,
        species,
        characters,
        metadata
    } = useCharacters();

    return (
        <Grid container>
            <Grid item xs={12} md={6}>
               <List>
                 {characters?.map((character) => {
                    return (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={character?.name}
                                secondary={character?.gender}
                            />
                        </ListItem>
                    )
                 })}
               </List>
            </Grid>
        </Grid>
    );
};

export default CharacterList;