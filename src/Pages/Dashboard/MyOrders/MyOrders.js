import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';

const MyOrders = () => {
    const { user } = useAuth();
    const [deleted, setDeleted] = React.useState(false);

    const [myOrders, setMyOrders] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://afternoon-plateau-57828.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDeleted(false)
                console.log(user.email)
                setMyOrders(data);
            })
    }, [user.email, deleted])

    const handleDeleteOrder = (orderId) => {
        console.log(orderId)
        fetch(`https://afternoon-plateau-57828.herokuapp.com/orders/${orderId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                setDeleted(true)
                console.log(data)
            })
    }

    return (
        <TableContainer component={Paper}>
            <h2>orders: {myOrders.length}</h2>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Products</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Action</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {myOrders.map((myOrder) => (
                        <TableRow
                            key={myOrder._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {myOrder.productTitle}
                            </TableCell>
                            <TableCell align="right">{myOrder.productPrice}</TableCell>
                            <TableCell align="right">{myOrder.orderStatus}</TableCell>
                            <TableCell align="right"><Button onClick={() => handleDeleteOrder(myOrder._id)}>Delete</Button></TableCell>
                            <TableCell align="right">{myOrder.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyOrders;