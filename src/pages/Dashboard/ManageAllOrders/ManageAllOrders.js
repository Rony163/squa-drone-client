import { Button, Container, FormControl, NativeSelect, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { Box } from '@mui/system';
import axios from 'axios';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = React.useState('');
    const [check, setCheck] = useState(false);
    useEffect(() => {
        fetch("https://pacific-refuge-33638.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [check, orders])


    const handleChange = (e, id) => {
        setStatus(e.target.value);

    }
    const manageStatus = (id) => {
        setCheck(!check);
        const order = {
            status
        }
        axios.put(`https://pacific-refuge-33638.herokuapp.com/orders/${id}`, order)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    alert('Status updated Successfully')
                }
            })

    }

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure to delete the selected item?")
        if (proceed) {
            fetch(`https://pacific-refuge-33638.herokuapp.com/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);

                    }
                })
        }
    }

    return (
        <Container>
            <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold', my: 2 }} variant="h4">All Orders List</Typography>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Service Name</StyledTableCell>
                            <StyledTableCell align="left">Phone</StyledTableCell>
                            <StyledTableCell align="left">Address</StyledTableCell>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                            <StyledTableCell align="left">Action </StyledTableCell>
                            <StyledTableCell align="left">Save changes </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                <StyledTableCell align="left">{row.serviceName}</StyledTableCell>
                                <StyledTableCell align="left">{row.phone}</StyledTableCell>
                                <StyledTableCell align="left">{row.address}</StyledTableCell>
                                <StyledTableCell align="left">{row.date}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <NativeSelect
                                                defaultValue={row.status}
                                                onChange={handleChange}
                                                style={{
                                                    color: (
                                                        (row.status === 'pending' && 'blue') ||
                                                        (row.status === 'rejected' && 'red') ||
                                                        (row.status === 'shipped' && 'green')
                                                    )
                                                }}
                                            >
                                                <option value="pending">pending</option>
                                                <option value="rejected">rejected</option>
                                                <option value="shipped">shipped</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </Box>
                                </StyledTableCell>

                                <StyledTableCell align="left">
                                    <Tooltip title="Delete">
                                        <BackspaceIcon onClick={() => handleDelete(row._id)} sx={{
                                            cursor: 'pointer',
                                            mt: 1,
                                            color: "red",

                                        }}></BackspaceIcon>
                                    </Tooltip>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <Button onClick={() => manageStatus(row._id)} variant="outlined">Save</Button>
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageAllOrders;