import { Container, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Review from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-plateau-57828.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', my: 3 }} >Reviews</Typography>

            <Grid container spacing={2}>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </Grid>

        </Container>
    );
};

export default Reviews;