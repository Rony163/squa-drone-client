import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://pacific-refuge-33638.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold', mt: 10 }} variant="h4">All Reviews </Typography>
            <Grid sx={{ my: 3 }} container spacing={4}>
                {reviews.map(review => <SingleReview
                    key={review._id}
                    review={review}
                ></SingleReview>)}
            </Grid>

        </Container>
    );
};

export default Reviews;