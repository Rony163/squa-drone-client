import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    let { user, isLoading, admin } = useAuth();
    if (isLoading) {
        return <CircularProgress></CircularProgress>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;