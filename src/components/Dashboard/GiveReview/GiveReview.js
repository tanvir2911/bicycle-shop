import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import useAuth from '../../../hooks/useAuth';
import './GiveReview.css'

const GiveReview = () => {

    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {

        fetch('http://localhost:5000/reviews', {
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


            <form className="give-review-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.name} {...register("name")} />
                <br />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <br />
                {errors.email && <span className="error">This field is required</span>}
                <textarea placeholder="Give Us a Review" defaultValue="" {...register("reviewText")} />

                <br />
                <input placeholder="Give Rating Here 0-5" defaultValue="" {...register("rating")} />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default GiveReview;