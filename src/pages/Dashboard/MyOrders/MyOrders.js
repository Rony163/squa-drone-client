import { Alert, AlertTitle, Button, Container, Grid, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import { useHistory } from 'react-router-dom'

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://pacific-refuge-33638.herokuapp.com/myOrders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])


    const handleDelete = (id, status) => {
        console.log(id, status);
        if (status === 'shipped') {
            alert(`Sorry ${user.displayName} The order is already shipped, you can't delete this order now!`)
        }
        else {
            const proceed = window.confirm("Are you sure to cancel this order?")
            proceed &&
                fetch(`https://pacific-refuge-33638.herokuapp.com/orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingOrders = orders.filter(order => order._id !== id);
                            setOrders(remainingOrders);
                        }
                    })
        }
    }

    return (
        <Container>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold' }} variant="h4">Total Orders: {orders.length}</Typography>
            {orders.length ? <Grid container sx={{ my: 3 }} spacing={2}>
                {orders.map(orders => <MyOrder
                    key={orders._id}
                    orders={orders}
                    handleDelete={handleDelete}
                ></MyOrder>)
                }
            </Grid>

                :
                <Alert severity="info" sx={{ mt: 5 }}>
                    <AlertTitle>info</AlertTitle>
                    You haven't order anything — <strong>check out Explore Products for making order please!</strong>
                    <Link to='/explore-services' style={{ textDecoration: 'none', padding: 2 }}> <Button variant="contained">Explore Products</Button></Link>
                </Alert>
            }
        </Container>
    );
};

export default MyOrders;