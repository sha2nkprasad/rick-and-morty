import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

const items = [1,2,3,4];

const CharacterList = () => {
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