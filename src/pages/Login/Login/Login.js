import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../Shared/Navigation/Navbar/Navbar';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const { loginUser, signinWithGoogle, user, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }


    const handleLoginSubmit = (e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }

    const handleGoogleSignIn = () => {
        signinWithGoogle(location, history);
    }
    return (
        <div>
            <Navbar></Navbar>
            <Typography sx={{ mt: 5 }} variant="h5" gutterBottom>Login Here</Typography>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField
                    required
                    onBlur={handleOnBlur}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    variant="standard" />
                <TextField
                    required
                    onBlur={handleOnBlur}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    variant="standard" />
                <br />
                <br />
                <Button style={{ backgroundColor: '#01b1ec' }} sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Login</Button>
                <br />
                <br />
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/register">
                    <Button variant="text">New User? Please Register</Button>
                </NavLink>
            </form>}
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">Login Successful</Alert>}
            {authError && <Alert sx={{ textAlign: 'center' }} severity="error">{authError}</Alert>}

            <p>------------------------</p>
            <Button onClick={handleGoogleSignIn} style={{ backgroundColor: '#01b1ec' }} variant="contained">Google Sign In</Button>

        </div>
    );
};

export default Login;