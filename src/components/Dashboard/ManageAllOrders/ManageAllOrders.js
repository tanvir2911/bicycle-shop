import React, { useEffect, useState } from 'react';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/orders/${id}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = orders.filterk(order => order._id !== id);
                    setOrders(remaining);
                }
            })
    }

    return (
        <div>
            <h2>Manage Orders</h2>
            {
                orders.map(order => <div key={order._id}>
                    <h3>{order.name}</h3>
                    <p>{order._id}</p>
                    <button onClick={() => handleDelete(order._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;