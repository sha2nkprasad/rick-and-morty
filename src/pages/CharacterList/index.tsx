import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import { useGetCharactersQuery } from "../../generated/graphql";
import useCharacters from "./characters-hook";

const items = [1,2,3,4];

const CharacterList = () => {

    const {
        name,
        species
    } = useCharacters();

    return (
        <Grid container>
            <Grid item xs={12} md={6}>
               <List>
                 {items.map(() => {
                    return (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Single-line item"
                                secondary="Secondary text"
                            />
                        </ListItem>
                    )
                 })};
               </List>
            </Grid>
        </Grid>
    );
};

export default CharacterList;