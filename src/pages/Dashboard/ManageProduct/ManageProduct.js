import { Grid, Tooltip } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const ManageProduct = ({ product, handleDelete }) => {
    const { name, img, description, price, _id } = product;
    const [expanded, setExpanded] = React.useState(false);
    const date = new Date();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, p: 2, boxShadow: 2, m: 2 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
                            {name.slice(0, 1)}
                        </Avatar>
                    }
                    action={
                        <Tooltip onClick={() => handleDelete(_id)} title="Delete">
                            <IconButton sx={{ color: red[500] }} aria-label="settings">
                                <DeleteForeverIcon sx={{ fontSize: '40px' }} />
                            </IconButton>
                        </Tooltip>
                    }
                    title={name}
                    subheader={date.toLocaleString()}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>


            </Card>
        </Grid>
    );
};

export default ManageProduct;