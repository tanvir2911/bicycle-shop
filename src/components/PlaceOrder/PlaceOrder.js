import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();


    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const onSubmit = data => {

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed successfully');
                    reset();
                }
            })
    };

    return (
        <div>
            <h2>Product Name: {product.name}</h2>
            <h2>Product Id: {product._id}</h2>
            <h2>Price: {product.price}</h2>

            <form className="place-order-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.name} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default PlaceOrder;