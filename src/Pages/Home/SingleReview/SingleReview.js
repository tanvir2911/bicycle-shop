import { Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



const SingleReview = ({ review }) => {
    const { email, name, reviewText, ratingNumber, } = review;

    return (
        <>
            <Grid item xs={8} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {email}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {reviewText}
                    </Typography>
                    <Typography component="legend">Ratings</Typography>
                    <Rating name="read-only" value={ratingNumber} readOnly />
                </Paper>
            </Grid>
        </>


    );
};

export default SingleReview;