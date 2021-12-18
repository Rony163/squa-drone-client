import { Card, CardContent, CardMedia, Grid, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
const MyOrder = ({ orders, handleDelete }) => {

    const { serviceName, price, img, status, date, _id } = orders;

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6">
                            {serviceName}
                        </Typography>
                        <Typography sx={{ fontFamily: 'fantasy' }} variant="subtitle2" gutterBottom component="div">
                            ${price}
                        </Typography>
                        <Typography style={{
                            backgroundColor: (
                                (status === 'pending' && 'blue') ||
                                (status === 'rejected' && 'red') ||
                                (status === 'shipped' && 'green')
                            ),
                            color: 'white'

                        }} variant="button" display="block" gutterBottom>
                            {status}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" component="div">
                            Order Date:  {date}
                        </Typography>
                        <Tooltip onClick={() => handleDelete(_id, status)} title="Delete">
                            <AutoDeleteIcon
                                sx={{
                                    cursor: 'pointer',
                                    mt: 1,
                                    color: "red",

                                }}></AutoDeleteIcon>
                        </Tooltip>
                    </CardContent>

                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={img}
                    alt="Live from space album cover"
                />
            </Card>
        </Grid>
    );
};

export default MyOrder;