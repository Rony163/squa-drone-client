import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import register from '../../../images/register.png'
import logoBlack from '../../../images/logo-black.png'
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
const Registration = () => {
    const { registerUser, isLoading, authError, user } = useAuth();
    const [registrationData, setRegistrationData] = useState({});
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistrationData = { ...registrationData };
        newRegistrationData[field] = value;
        console.log(newRegistrationData);
        setRegistrationData(newRegistrationData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registrationData.password !== registrationData.password2) {
            alert("Your password didn't match");
            return;
        }
        // console.log(registrationData);

        registerUser(registrationData.email, registrationData.password, registrationData.name, history);

    }

    return (
        <Container>
            <img src={logoBlack} alt="" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 5 }} variant="h5" gutterBottom>Please <span style={{ color: '#01b1ec' }}>Register</span></Typography>
                    {!isLoading &&
                        <form onSubmit={handleSubmit}>
                            <TextField
                                required
                                onBlur={handleOnBlur}
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                variant="standard" />
                            <TextField
                                required
                                onBlur={handleOnBlur}
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                variant="standard" />
                            <TextField
                                required
                                onBlur={handleOnBlur}
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                variant="standard" />
                            <TextField
                                required
                                onBlur={handleOnBlur}
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                variant="standard" />
                            <br />
                            <br />
                            <Button style={{ backgroundColor: '#01b1ec' }} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <br />
                            <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>
                    }
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Registration Successful</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 15 }}>
                    <img style={{ width: '100%' }} src={register} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Registration;