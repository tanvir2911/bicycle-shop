import { Container, Grid } from '@mui/material';
import React from 'react';

const Products = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <h2>This is Products</h2>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Products;