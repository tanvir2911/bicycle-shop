import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    reset();
                }
            })
    };

    return (
        <div className="add-product">
            <h2>Please Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Product Name" />
                <input {...register("design", { required: true, maxLength: 20 })} placeholder="Designed by" />

                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;