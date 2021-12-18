import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email
        }
        axios.put('https://pacific-refuge-33638.herokuapp.com/users/admin', user)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setSuccess(true);
                    e.target.reset();
                }
            })
    }
    return (
        <Container>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold', my: 3 }} variant="h4">Make Admin</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    onBlur={handleOnBlur}
                    required
                    fullWidth
                    type="email"
                    id="outlined-helperText"
                    defaultValue="example: a@b.com"
                    helperText="Enter the email please"
                />
                {success && <Alert variant="filled" severity="success">
                    This email holder has become and admin now!!! success
                </Alert>}
                <Button
                    type="submit"
                    sx={{
                        width: "50%",
                        mt: 2,
                        backgroundColor: '#01b1ec',
                        color: 'white',
                        ":hover": {
                            color: 'black'
                        }
                    }}
                    variant="outlined">Click to Submit</Button>
            </form>

        </Container>
    );
};

export default MakeAdmin;