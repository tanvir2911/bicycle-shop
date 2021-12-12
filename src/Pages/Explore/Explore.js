import { Container, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Product from '../Shared/Product/Product';



const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-plateau-57828.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container>
            <Typography style={{ color: 'rgba(109, 108, 112 )' }} my={4} variant="h5">Explore All the Cycles</Typography>
            <Grid container spacing={2}>
                {
                    products.map(product => <Product
                        product={product}
                    />)
                }

            </Grid>
        </Container>
    );
};

export default Explore;