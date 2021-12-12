import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../../Shared/Product/Product';



const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://afternoon-plateau-57828.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Container>
            <Grid container spacing={2}>
                <Typography variant="h4" sx={{ color: 'info.main', my: 3 }} >Bicycles</Typography>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    />)
                }

            </Grid>
        </Container>
    );
};

export default Products;