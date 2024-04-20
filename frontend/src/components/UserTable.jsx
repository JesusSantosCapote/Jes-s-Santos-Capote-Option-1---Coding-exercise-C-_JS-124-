import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from '../axios'
import Button from '@mui/material/Button';

export default function UserTable({data, handleDelete}) {
  const handleDeleteButtonClick = (id) => {
    axios.delete(`/users/${id}`)
    .catch((error) => console.log(error))
    .then(() => handleDelete(id))
  }

  return (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
              <Button size='small' variant="contained" onClick={() => {handleDeleteButtonClick(user.id)}}>
                  Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}