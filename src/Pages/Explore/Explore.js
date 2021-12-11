import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Product from '../Shared/Product/Product';

const products = [
    {
        title: 'Cycles Caferacer Lady Doppin',
        description: 'Riding bicycles, which is also called cycling, is an important way to travel in several parts of the world. The most popular type of cycling is Utility cycling.',
        price: '2,500.00',
        img: 'https://i.ibb.co/pyzTwNF/bicycle-1.jpg'
    },
    {
        title: 'Linus Dutchi 3-speed internal red frame',
        description: 'Riding bicycles, which is also called cycling, is an important way to travel in several parts of the world. The most popular type of cycling is Utility cycling.',
        price: '1,750.00',
        img: 'https://i.ibb.co/8XpQ4Fr/bicycle-2.jpg'
    },
    {
        title: 'Linus Roadster Classic with black profile',
        description: 'Riding bicycles, which is also called cycling, is an important way to travel in several parts of the world. The most popular type of cycling is Utility cycling.',
        price: '3,760.00',
        img: 'https://i.ibb.co/R4cCc03/bicycle-3.webp'
    },
    {
        title: 'Mach City iBike speed with yellow profile',
        description: 'Riding bicycles, which is also called cycling, is an important way to travel in several parts of the world. The most popular type of cycling is Utility cycling.',
        price: '2,460.00',
        img: 'https://i.ibb.co/YXGMYgL/bicycle-4.jpg'
    },
    {
        title: 'Cycles Caferacer Lady Doppin',
        description: 'Riding bicycles, which is also called cycling, is an important way to travel in several parts of the world. The most popular type of cycling is Utility cycling.',
        price: '2,675.00',
        img: 'https://i.ibb.co/r6C8yvw/bicycle-5.jpg'
    },
    {
        title: 'Linus Dutchi 3-speed internal yellow frame',
        description: 'Riding bicycles, which is also called cycling, is an important way to travel in several parts of the world. The most popular type of cycling is Utility cycling.',
        price: '3,200.00',
        img: 'https://i.ibb.co/B2nFyJ8/bicycle-6.webp'
    },
    {
        title: 'Linus Roadster Classic with paste profile',
        description: 'Riding bicycles, which is also called cycling, is an important way to travel in several parts of the world. The most popular type of cycling is Utility cycling.',
        price: '1,700.00',
        img: 'https://i.ibb.co/5sK7kTZ/bicycle-7.jpg'
    },
    {
        title: 'Linus Dutchi 3-speed internal red frame',
        description: 'Riding bicycles, which is also called cycling, is an important way to travel in several parts of the world. The most popular type of cycling is Utility cycling.',
        price: '2,550.00',
        img: 'https://i.ibb.co/82rBTXp/bicycle-8.jpg'
    },
    {
        title: 'Mach City iBike speed with yellow profile',
        description: 'Riding bicycles, which is also called cycling, is an important way to travel in several parts of the world. The most popular type of cycling is Utility cycling.',
        price: '3,550.00',
        img: 'https://i.ibb.co/nRBg4cr/bicycle-9.jpg'
    },
    {
        title: 'CremeCycle Caferacer',
        description: 'Riding bicycles, which is also called cycling, is an important way to travel in several parts of the world. The most popular type of cycling is Utility cycling.',
        price: '2,345.00',
        img: 'https://i.ibb.co/4sqMs5T/bicycle-10.jpg'
    },
]

const Explore = () => {
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