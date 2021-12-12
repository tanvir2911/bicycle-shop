import React, { useState } from 'react'; import { Button, Container, TextField, Typography } from '@mui/material';


const AddAProduct = () => {
    const [productData, setProductData] = useState({})

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...productData };
        newProductData[field] = value;
        setProductData(newProductData);
        console.log(productData)
    }

    const handleOnSubmit = e => {
        fetch('https://afternoon-plateau-57828.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('product added successfully')
                    return
                }
                else {
                    alert('something wrong')
                }
            })
        e.preventDefault();
    }



    return (
        <Container>
            <form onSubmit={handleOnSubmit}>

                <TextField
                    sx={{ width: '80%' }}
                    id="name"
                    label="Product Name"
                    type="text"
                    name="title"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <br />
                <br />
                <TextField
                    sx={{ width: '80%' }}
                    id="description"
                    label="Description"
                    type="text"
                    name="description"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <br />
                <br />
                <TextField
                    sx={{ width: '80%' }}
                    id="price"
                    label="Price $"
                    type="number"
                    name="price"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <br />
                <br />
                <TextField
                    sx={{ width: '80%' }}
                    id="img"
                    label="Image URL"
                    type="url"
                    name="img"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <br />
                <br />
                <br />
                <Button type="submit" sx={{ width: '80%' }} variant="contained">Submit</Button>

            </form>
        </Container>
    );
};

export default AddAProduct;