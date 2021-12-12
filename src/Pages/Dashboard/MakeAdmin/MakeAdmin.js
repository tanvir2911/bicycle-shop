import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        const email = e.target.value;
        setEmail(email);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://afternoon-plateau-57828.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2>Make an Admin</h2>
            {success && <Alert severity="success">Made Admin Successfully!!</Alert>}
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    onBlur={handleOnBlur}
                    id="admin-email"
                    type="email"
                    label="Email"
                    variant="standard"
                />
                <br />
                <br />
                <Button variant='contained' type='submit'>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;