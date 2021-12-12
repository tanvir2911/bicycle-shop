import * as React from 'react';
import { Container, TextareaAutosize, Typography, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth()
    const [reviewText, setReviewText] = React.useState('');
    const [ratingValue, setRatingValue] = React.useState(2);
    console.log(ratingValue)


    const handleOnBlur = e => {
        setReviewText(e.target.value)

    }

    const handleOnSubmit = e => {
        const newReview = {
            email: user.email,
            name: user.displayName,
            reviewText,
            ratingNumber: ratingValue,
        }
        console.log(newReview)

        fetch('https://afternoon-plateau-57828.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        e.preventDefault()
    }

    return (
        <Container>
            <Typography variant="h6"> Hello {user.displayName} Write Your Experience in this Website Here</Typography>
            <br />
            <br />
            <form onSubmit={handleOnSubmit}>
                <TextareaAutosize
                    onBlur={handleOnBlur}
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Write your sweet words here..."
                    style={{ width: 300 }}
                />
                <br />
                <br />

                <Rating
                    name="simple-controlled"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                        setRatingValue(newValue);
                    }}
                />
                <br />
                <br />
                <Button type="submit">Submit</Button>
            </form>
        </Container>
    );
};

export default Review;