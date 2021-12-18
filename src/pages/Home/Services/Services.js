import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://pacific-refuge-33638.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container sx={{ flexGrow: 1, mt: 5 }}>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold' }} variant="h4">Key Products </Typography>
            {services.length ? <Grid container spacing={3} sx={{ my: 3 }}>
                {services.slice(0, 6).map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)}
            </Grid> :
                <CircularProgress />
            }
        </Container>
    );
};

export default Services;