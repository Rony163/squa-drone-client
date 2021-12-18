import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
    Button,
} from "@mui/material";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { makeStyles } from '@mui/styles';
import logoBlack from '../../../../images/logo-black.png'
import { Box } from "@mui/system";
import useAuth from "../../../../hooks/useAuth";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginRight: "20px",
        display: "flex",

    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "18px",
        marginLeft: "80px",

    },

}));

function Navbar() {
    const { user, logout } = useAuth();
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="sticky" style={{ backgroundColor: 'white' }}>
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    <img style={{ width: '180px' }} src={logoBlack} alt="" />

                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                            textDecoration: 'underline'
                        }} to="/home" className={classes.link}>
                            Home
                        </NavLink>
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red",
                                textDecoration: 'underline'
                            }}
                            to="/explore-services" className={classes.link}>
                            Explore Products
                        </NavLink>

                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                            textDecoration: 'underline'
                        }}
                            to="/dashboard" className={classes.link}>
                            Dashboard
                        </NavLink>
                        {!user.email ? <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                            textDecoration: 'underline'
                        }} to="/login" style={{ backgroundColor: '#01b1ec', color: 'white', padding: "2px 40px", borderRadius: "5px" }} className={classes.link}>
                            Login
                        </NavLink> :
                            <Box>
                                <Button onClick={logout} style={{ backgroundColor: '#01b1ec', color: 'white', marginLeft: "20px", padding: "2px 40px", borderRadius: "5px" }} className={classes.link}>
                                    Logout
                                </Button>
                                <span style={{ color: 'red', marginLeft: '5px' }} >Sign in as: {user.displayName}</span>
                            </Box>

                        }
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;