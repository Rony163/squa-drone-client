import { Alert, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const [rating, setRating] = React.useState(5);
    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [review, setReview] = React.useState({ name: user.displayName, email: user.email });
    const handleChange = (event) => {
        setRating(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviews = {
            ...review,
            rating: rating
        }

        axios.post('https://pacific-refuge-33638.herokuapp.com/reviews', reviews)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true);
                    e.target.reset();
                }
            })

    }



    return (
        <Container>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold', my: 3 }} variant="h4">Please Give your Review here </Typography>
            <form onSubmit={handleSubmit}>
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: "center"
                        }}
                    >
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '50%' }}
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                            name='name'
                        />
                        <br />
                        <TextField
                            onBlur={handleOnBlur}
                            type="email"
                            sx={{ width: '50%' }}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                            name="email"
                        />
                        <br />
                        <TextField
                            onBlur={handleOnBlur}
                            required
                            sx={{ width: '50%' }}
                            id="outlined-size-small"
                            name="designation"
                            placeholder="Designation"
                            size="small"
                        />
                        <br />
                        <TextField
                            onBlur={handleOnBlur}
                            required
                            name="message"
                            sx={{ width: '100%' }}
                            placeholder="Message"
                        />
                        <br />
                        <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
                            select Your Rating Out Of Five
                        </Button>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-controlled-open-select-label">Rating</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={rating}
                                onChange={handleChange}
                            >

                                <MenuItem value={1}>One</MenuItem>
                                <MenuItem value={1.5}>One Point Five</MenuItem>
                                <MenuItem value={2}>Two</MenuItem>
                                <MenuItem value={2.5}>Two Point Five</MenuItem>
                                <MenuItem value={3}>Three</MenuItem>
                                <MenuItem value={3.5}>Three Point Five</MenuItem>
                                <MenuItem value={4}>Four</MenuItem>
                                <MenuItem value={4.5}>Four Point Five</MenuItem>
                                <MenuItem value={5}>Five</MenuItem>

                            </Select>
                        </FormControl>
                        <br />
                        {success && <Alert severity="success">Review Submitted Successfully! Thank you {user.displayName}</Alert>}
                        <br />
                        <Button type="submit" style={{ backgroundColor: '#01b1ec', padding: "5px 100px" }} variant="contained">Submit</Button>
                    </Box>
                </Container>
            </form>
        </Container>
    );
};

export default Review;