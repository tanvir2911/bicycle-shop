import { Button, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';


const Product = ({ product }) => {
    const { _id, title, description, price, img } = product;



    return (
        <Grid item xs={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader sx={{ textAlign: 'left', fontWeight: 700 }}
                    title={title}
                    subheader={`$ ${price}`}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt=""
                />
                <CardContent>
                    <Typography sx={{ textAlign: 'left' }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <NavLink style={{ textDecoration: 'none' }} to={`/products/${_id}`}><Button size="small">Buy Now</Button></NavLink>
                </CardActions>

            </Card>
        </Grid>
    );
};

export default Product;