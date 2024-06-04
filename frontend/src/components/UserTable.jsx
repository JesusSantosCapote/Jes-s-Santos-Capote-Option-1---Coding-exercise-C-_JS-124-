import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from '../axios'
import Button from '@mui/material/Button';
import UpdateUserModal from './UpdateUserModal';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { useState } from 'react';

export default function UserTable({data, handleDelete, handleUpdate}) {
  console.log(data)
  return (
    <Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                {user.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell>
              <Grid container spacing={10}>
                <Grid item xs={2}>
                  <Button size='small' variant="contained" onClick={() => handleDelete(user.id)}>
                      Delete
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <UpdateUserModal id={user.id} handleUpdate={handleUpdate}/>
                </Grid>
              </Grid>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
}