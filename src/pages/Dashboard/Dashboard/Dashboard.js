import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import logoBlack from '../../../images/logo-black.png';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddIcon from '@mui/icons-material/Add';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExploreIcon from '@mui/icons-material/Explore';
import BookIcon from '@mui/icons-material/Book';
import AddCommentIcon from '@mui/icons-material/AddComment';
import PaymentsIcon from '@mui/icons-material/Payments';

const drawerWidth = 240;

function Dashboard(props) {
    const { logout, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <img style={{ width: '70%' }} src={logoBlack} alt="" />
            <Toolbar sx={{ mt: -8 }} />
            <Divider />
            <Box sx={{
                textAlign: 'left',
                pl: 4,
                pt: 2

            }}>
                {/* Common for Admin and users */}
                <NavLink style={{ textDecoration: 'none' }} to="/explore-services" >
                    <ExploreIcon sx={{ fontSize: '40px', color: '#01b1ec' }}></ExploreIcon>
                    <Button sx={{}} variant="text"> Explore Products</Button>
                </NavLink>
                <br />
                <NavLink activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} style={{ textDecoration: 'none' }} to={`${url}`} >
                    <AdminPanelSettingsIcon sx={{ fontSize: '40px', color: '#01b1ec' }}></AdminPanelSettingsIcon>
                    <Button sx={{}} variant="text"> Dashboard</Button>
                </NavLink>
                <br />

                {/* only for users */}
                {!admin && <Box>

                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} style={{ textDecoration: 'none' }} to={`${url}/myOrders`} >
                        <BookIcon sx={{ fontSize: '40px', color: '#01b1ec' }}></BookIcon>
                        <Button sx={{}} variant="text">My Orders</Button>
                    </NavLink>
                    <br />

                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/addReview`} >
                        <AddCommentIcon sx={{ fontSize: '40px', color: '#01b1ec' }}></AddCommentIcon>
                        <Button sx={{}} variant="text">Add Review</Button>
                    </NavLink>
                    <br />

                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/payOrder`} >
                        <PaymentsIcon sx={{ fontSize: '40px', color: '#01b1ec' }}></PaymentsIcon>
                        <Button sx={{}} variant="text"> Pay Order</Button>
                    </NavLink>
                    <br />
                </Box>}

                {/* Only For Admin */}
                {admin && <Box>
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageOrders`} >
                        <ManageAccountsIcon sx={{ fontSize: '40px', color: '#01b1ec' }}></ManageAccountsIcon>
                        <Button sx={{}} variant="text"> Manage Orders</Button>
                    </NavLink>
                    <br />

                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/addProduct`} >
                        <AddIcon sx={{ fontSize: '40px', color: '#01b1ec' }}></AddIcon>
                        <Button sx={{}} variant="text">Add Product</Button>
                    </NavLink>
                    <br />

                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageProducts`} >
                        <ProductionQuantityLimitsIcon sx={{ fontSize: '40px', color: '#01b1ec' }}></ProductionQuantityLimitsIcon>
                        <Button sx={{}} variant="text">Manage Products</Button>
                    </NavLink>
                    <br />
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`} >
                        <AdminPanelSettingsTwoToneIcon sx={{ fontSize: '40px', color: '#01b1ec' }}></AdminPanelSettingsTwoToneIcon>
                        <Button sx={{}} variant="text">Make Admin</Button>
                    </NavLink>
                    <br />
                </Box>}

                <NavLink onClick={logout} to='/' style={{ textDecoration: 'none' }}  >
                    <ExitToAppIcon sx={{ fontSize: '40px', color: '#01b1ec' }}></ExitToAppIcon>
                    <Button sx={{}} variant="text"> Logout</Button>
                </NavLink>
            </Box>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{ backgroundColor: '#01b1ec' }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        {!admin ? <DashboardHome></DashboardHome>
                            :
                            <AdminDashboard></AdminDashboard>
                        }
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/addReview`}>
                        <Review></Review>
                    </Route>
                    <Route exact path={`${path}/payOrder`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute exact path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;