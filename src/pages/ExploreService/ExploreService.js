import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ExploreService = ({ service }) => {
    const { name, img, price, _id } = service;
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 1, p: 1 }}>
                <CardContent>
                    <img src={img} alt="" />
                    <Typography sx={{ fontSize: '20px' }} variant="subtitle2" gutterBottom>
                        {name}
                    </Typography>
                    <Typography sx={{ fontSize: '18px' }} variant="subtitle2" gutterBottom component="div">
                        ${price}
                    </Typography>
                    <NavLink to={`/purchase/${_id}`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{ backgroundColor: '#01b1ec', padding: "5px 60px" }}>Purchase</Button>
                    </NavLink>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ExploreService;