import React, { useState } from "react";
import {
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from "../../../../hooks/useAuth";
import { Box } from "@mui/system";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
    },
    icon: {
        color: "white"
    }
}));

function DrawerComponent() {
    const { user, logout } = useAuth();
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/home" className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/explore-services" className={classes.link}>Explore Products</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/dashboard" className={classes.link}>Dashboard</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />

                    <ListItem onClick={() => setOpenDrawer(false)}>
                        {!user.email ? <ListItemText>
                            <Link to="/login" className={classes.link}>Login</Link>
                        </ListItemText> :

                            <ListItemText>
                                <Button onClick={logout} className={classes.link}>Logout</Button>
                            </ListItemText>
                        }

                    </ListItem>
                    <Divider />

                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
                <MenuIcon style={{ color: 'black' }}></MenuIcon>
            </IconButton>
        </>
    );
}
export default DrawerComponent;