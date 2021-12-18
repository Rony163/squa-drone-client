import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold' }} variant="h6" gutterBottom component="div">Assalamu alaikum, Welcome {user.displayName} to your personal Dashboard </Typography>

            <br />
            <Typography sx={{ textAlign: 'left', fontFamily: 'cursive', fontWeight: '800', letterSpacing: 1 }}>Mainly you can do four things from here: </Typography>
            <ul>
                <Typography sx={{ textAlign: 'left', letterSpacing: 1 }}>
                    <li >
                        You can check all of your orders by simply clicking
                        <span className="animate__animated animate__heartBeat" style={{ backgroundColor: 'yellow', textTransform: "uppercase", margin: 10, display: 'inline-block' }}>  My Orders.</span>You can also cancel your order if it is still pending.
                    </li>
                </Typography>
                <br />
                <Typography sx={{ textAlign: 'left', letterSpacing: 1 }}>
                    <li>
                        If You really like our website and find it very easy to purchase any drone, then you can write your thoughts and give us rating on  <span className="animate__animated animate__heartBeat" style={{ backgroundColor: 'yellow', textTransform: "uppercase", margin: 10, display: 'inline-block' }}>Add Review Section.</span>
                    </li>
                </Typography>
                <br />
                <Typography sx={{ textAlign: 'left', letterSpacing: 1 }}>
                    <li>
                        You can Pay us anytime by going through <span className="animate__animated animate__heartBeat" style={{ backgroundColor: 'yellow', textTransform: "uppercase", margin: 10, display: 'inline-block' }}>Pay Order.</span>   Multiple Payment system are available there. You can choose whatever you want.
                    </li>
                </Typography>
                <br />
                <Typography sx={{ textAlign: 'left', letterSpacing: 1 }}>
                    <li>
                        Moreover if you still haven't order anything you can simply go to <span className="animate__animated animate__heartBeat" style={{ backgroundColor: 'yellow', textTransform: "uppercase", margin: 10, display: 'inline-block' }}>Explore Products</span>  and clicking purchase you can see the details of that specific product and order it anytime.
                    </li>
                </Typography>
            </ul>
        </div >
    );
};

export default DashboardHome;