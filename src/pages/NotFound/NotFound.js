import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../images/notFound.jpg'
import Navbar from '../Shared/Navigation/Navbar/Navbar';
const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img style={{ width: '35%', marginTop: '5px' }} src={notFound} alt="" />
            <br />
            <NavLink to='/home' style={{ textDecoration: 'none' }}>
                <Button style={{ backgroundColor: '#01b1ec', width: '30%' }} variant="contained">Home Page</Button>
            </NavLink>

        </div>
    );
};

export default NotFound;