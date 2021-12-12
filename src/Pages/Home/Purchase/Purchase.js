import { TextField, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth();
    const [product, setProduct] = useState({})
    const [orderInfo, setOrderInfo] = useState({});

    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://afternoon-plateau-57828.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            })
    }, [productId])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderInfo = { ...orderInfo };
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo);
        console.log(orderInfo)

    }

    const handleOnSubmit = e => {

        const newOrder = {
            ...orderInfo,
            productTitle: product.title,
            productPrice: product.price,
            customerName: user.displayName,
            customerEmail: user.email,
            orderStatus: 'pending',

        }

        fetch('https://afternoon-plateau-57828.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        console.log(newOrder)

        e.preventDefault()
    }


    return (
        <div>
            <Typography variant="h5">{product.title}</Typography>
            <Typography variant="body2">Price: ${product.price}</Typography>
            <form onSubmit={handleOnSubmit}>

                <TextField
                    required
                    sx={{ width: '80%' }}
                    id="name"
                    label="Your Name"
                    type="text"
                    name="name"
                    defaultValue={user.displayName}
                    variant="standard"
                />
                <br />
                <br />

                <TextField
                    required
                    sx={{ width: '80%' }}
                    id="email"
                    label="Your Email"
                    type="email"
                    name="customerEmail"
                    defaultValue={user.email}
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <br />
                <br />
                <TextField
                    required
                    sx={{ width: '80%' }}
                    id="address"
                    label="Your Address"
                    type="text"
                    name="customerAddress"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <br />
                <br />
                <TextField
                    required
                    sx={{ width: '80%' }}
                    id="phone"
                    label="Phone Number"
                    type="number"
                    name="customerPhone"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <br />
                <br />
                <Button sx={{ width: '80%' }} type="submit" >Submit</Button>

            </form>
        </div>
    );
};

export default Purchase;