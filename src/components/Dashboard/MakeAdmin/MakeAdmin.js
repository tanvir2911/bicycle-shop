import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email }

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { })
        e.preventDefault()
    }
    return (
        <div>
            <h2> Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input onBlur={handleOnBlur} type="email" placeholder="Place an email" />
                <br />
                <input type="submit" value="Make Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;