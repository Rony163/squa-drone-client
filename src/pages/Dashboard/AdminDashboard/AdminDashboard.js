import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AdminDashboard = () => {
    const { user } = useAuth();
    return (
        <div>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold' }} variant="h6" gutterBottom component="div">Assalamu alaikum, Welcome Admin: {user.displayName} to Squadrone Admin Dashboard </Typography>

            <br />
            <Typography sx={{ textAlign: 'left', fontFamily: 'cursive', fontWeight: '800', letterSpacing: 1 }}>Mainly you can do four things from here. If You are appointed as an Admin recently this Article is for you below: </Typography>
            <ul>
                <Typography sx={{ textAlign: 'left', letterSpacing: 1 }}>
                    <li >
                        You can check all of users orders by simply clicking
                        <span className="animate__animated animate__heartBeat" style={{ backgroundColor: 'yellow', textTransform: "uppercase", margin: 10, display: 'inline-block' }}>  Manage Orders.</span>You can also cancel orders,see the date of order placed, user address and change the status of any user orders anytime you need.
                    </li>
                </Typography>
                <br />
                <Typography sx={{ textAlign: 'left', letterSpacing: 1 }}>
                    <li>
                        You can add new Product by going to <span className="animate__animated animate__heartBeat" style={{ backgroundColor: 'yellow', textTransform: "uppercase", margin: 10, display: 'inline-block' }}>Add Product.</span> The new product will display in the explore product page for the users and manage pro page for the admins after adding .
                    </li>
                </Typography>
                <br />
                <Typography sx={{ textAlign: 'left', letterSpacing: 1 }}>
                    <li>
                        You can see all the products that already exists in the website to visit <span className="animate__animated animate__heartBeat" style={{ backgroundColor: 'yellow', textTransform: "uppercase", margin: 10, display: 'inline-block' }}>Manage Products.</span>  page. You can delete any product from there.
                    </li>
                </Typography>
                <br />
                <Typography sx={{ textAlign: 'left', letterSpacing: 1 }}>
                    <li>
                        If You want to make an admin any of the user you can go to <span className="animate__animated animate__heartBeat" style={{ backgroundColor: 'yellow', textTransform: "uppercase", margin: 10, display: 'inline-block' }}>Make Admin</span>  Page.
                    </li>
                </Typography>
            </ul>
        </div >
    );
};

export default AdminDashboard;