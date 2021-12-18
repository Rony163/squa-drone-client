import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://pacific-refuge-33638.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure to delete the selected item?")
        if (proceed) {
            fetch(`https://pacific-refuge-33638.herokuapp.com/services/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = products.filter(order => order._id !== id);
                        setProducts(remainingOrders);

                    }
                })
        }
    }
    return (
        <Container>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold' }} variant="h4">All Products {products.length}</Typography>
            <Grid sx={{ my: 3 }} container spacing={2}>
                {products.map(product => <ManageProduct
                    key={product._id}
                    product={product}
                    handleDelete={handleDelete}
                ></ManageProduct>)}
            </Grid>
        </Container>
    );
};

export default ManageProducts;