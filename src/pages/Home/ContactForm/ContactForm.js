import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextField from '@mui/material/TextField';
const ContactForm = () => {
    return (
        <Box>

            <Container sx={{ mt: 8, mb: 5 }}>
                <Typography variant="h6">CONTACT US</Typography>
                <Typography variant="h4" fontWeight="500" >Always Connect With Us</Typography>
                <form >
                    <TextField
                        sx={{ width: '60%', m: 2 }}
                        id="outlined-size-small"
                        placeholder="Email Address*"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '60%', m: 2 }}
                        id="outlined-size-small"
                        placeholder="Subject*"
                        size="small"
                    />

                    <TextField
                        sx={{ width: '60%', m: 2 }}
                        id="outlined-size-normal"
                        placeholder="Your message"
                    />
                    <br />
                    <Button variant="contained" style={{ backgroundColor: '#01b1ec', padding: "5px 60px" }}>Submit</Button>
                </form>

            </Container>

        </Box>
    );
};

export default ContactForm;