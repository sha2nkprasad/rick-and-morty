import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CardActionArea } from '@mui/material';
import { toSingleReadableFormat } from '../../utils/dateFormat';

type Props = {
    id: string;
    imageURL: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
    location: string;
    created: string;
    handleAction?: Function;
};

const useStyles = makeStyles(() => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}));

const CharacterCard = ({
    id,
    imageURL,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    created,
    handleAction,
}: Props) => {
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea
                onClick={() => !!id && handleAction && handleAction(id)}
            >
                <CardMedia
                    component="img"
                    height="500"
                    image={imageURL}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        component="div"
                    >
                        <div className={classes.content}>
                            <div>
                                Species: <strong>{species}</strong>
                            </div>
                            <div>
                                Gender: <strong>{gender}</strong>
                            </div>
                            <div>
                                Type: <strong>{type}</strong>
                            </div>
                            <div>
                                origin: <strong>{origin}</strong>
                            </div>
                            <div>
                                location: <strong>{location}</strong>
                            </div>
                            <div>
                                Status: <strong>{status}</strong>
                            </div>
                            <div>
                                Created:{' '}
                                <strong>
                                    {toSingleReadableFormat(created)}
                                </strong>
                            </div>
                        </div>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CharacterCard;
