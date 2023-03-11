import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { EpisodeDetailsFragment } from '../../generated/graphql';

type Props = {
    episodes: any;
};

const EpisodeCard = ({ episodes }: Props) => {
    let trimmedEpisodes = episodes;

    if (trimmedEpisodes?.length > 5) {
        trimmedEpisodes = trimmedEpisodes.splice(0, 5);
    }

    return (
        <Card sx={{ width: 500 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Episodes:
                </Typography>
                {trimmedEpisodes.map((episode: EpisodeDetailsFragment) => {
                    return (
                        <Box key={episode?.id}>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                {episode.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {episode?.air_date}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                marginBottom={2}
                            >
                                {episode?.episode}
                            </Typography>
                        </Box>
                    );
                })}
            </CardContent>
        </Card>
    );
};

export default EpisodeCard;
