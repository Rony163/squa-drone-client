import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
const AddProduct = () => {
    const { user } = useAuth();
    const [product, setProduct] = useState({});
    const [success, setSuccess] = React.useState(false);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://pacific-refuge-33638.herokuapp.com/services', product)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    setSuccess(true);
                    e.target.reset();
                }
            })
    }

    return (
        <Container>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold', mb: 2 }} variant="h4" >Add a Single Product</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    onBlur={handleOnBlur}
                    required
                    name="name"
                    sx={{ width: '70%', m: 1 }}
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="Enter the product Name"
                />
                <br />
                <TextField
                    onBlur={handleOnBlur}
                    required
                    name="img"
                    sx={{ width: '70%', m: 1 }}
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="img url"
                />
                <br />
                <TextField
                    onBlur={handleOnBlur}
                    required
                    name="price"
                    sx={{ width: '70%', m: 1 }}
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="Enter the Price"
                />
                <br />

                <TextareaAutosize
                    onBlur={handleOnBlur}
                    required
                    name="description"
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Description"
                    style={{ width: 300 }}
                />
                <br />
                {success && <Alert severity="success">Product Added Successfully!  Cheers {user.displayName}</Alert>}
                <br />
                <Button type="submit" style={{ backgroundColor: '#01b1ec', padding: "5px 100px" }} variant="contained">Submit</Button>
            </form>

        </Container>
    );
};

export default AddProduct;