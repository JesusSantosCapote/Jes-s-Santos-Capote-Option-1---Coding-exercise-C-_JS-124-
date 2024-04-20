import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserTable from './UserTable';
import axios from '../axios'

export default function UserById() {
  const [input, setInput] = useState("")
  const [isShowing, setShow] = useState(false);
  const [data, setData] = useState([])

  const handleClick = async (id) => {
    axios
    .get(`/users/${id}`)
    .then(response => {setData([response.data])});
    setShow(true)
  }

  const handleDelete = async (id) => {
    const newData = data.filter((user) => user.id != id);
    setData(newData)
  }

  return (
    <div>
      <h3>Search User by they Id</h3>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Id" variant="standard" 
        onChange={e => setInput(e.target.value)}
        />
        <Button size='large' variant="contained" onClick={() => handleClick(input)}>Search</Button>
      </Box>
      <br/>
      {isShowing && <UserTable data={data} handleDelete={handleDelete}/>}
    </div>
  );
}