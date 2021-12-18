import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExploreService from '../ExploreService/ExploreService';
import Navbar from '../Shared/Navigation/Navbar/Navbar';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from '../Shared/Footer/Footer';
import Banner from '../Home/Banner/Banner';
const ExploreServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://pacific-refuge-33638.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            {services.length ? <Container sx={{ flexGrow: 1, my: 3 }}>
                <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold' }} variant="h4">All Products </Typography>
                <Grid container spacing={3}>
                    {services.map(service => <ExploreService
                        key={service._id}
                        service={service}
                    ></ExploreService>)}
                </Grid>

            </Container>

                :
                <CircularProgress />
            }
            <Footer></Footer>
        </div>
    );
};

export default ExploreServices;