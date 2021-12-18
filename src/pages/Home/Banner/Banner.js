import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner.jpg';


const homeBanner = {
    background: `url(${banner})`,
    height: "500px",
    backgroundColor: 'rgba(45, 58, 74, 0.7)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: "10px"
}
const Banner = () => {
    return (
        <div style={homeBanner}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}
                        sx={{
                            textAlign: 'left',
                            color: 'white',
                            marginTop: "200px",
                            p: 2
                        }}
                    >
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '60px' }} variant="h3">
                                Get Your <span style={{ textDecoration: 'underline' }}>Drone </span>
                            </Typography>
                            <Typography sx={{ py: 3 }}>
                                If you’re buying a drone for the first time, you may want to consider the features, flight time, camera resolution, accessories and easy of use.
                            </Typography>
                        </Box>

                    </Grid>

                </Grid>


            </Container>

        </div>
    );
};

export default Banner;