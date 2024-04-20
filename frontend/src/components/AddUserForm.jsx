import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserTable from './UserTable';
import axios from '../axios'
import SuccessAlert from './SuccessAlert';

export default function AddUserForm() {
  const [inputId, setInputId] = useState("")
  const [inputName, setInputName] = useState("")
  const [showSuccess, setSuccess] = useState(false)

  const handleClick = async () => {
    const newUser = {id: inputId, name: inputName}
    await axios
    .post("/users", newUser)
    .then(() => {setSuccess(true)})
    .catch(error => console.log(error))
  }

  return (
    <div>
      <h3>Add new User</h3>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Id" variant="standard" 
        onChange={e => {setInputId(e.target.value); setSuccess(false)}}
        />

        <TextField id="outlined-basic" label="Name" variant="standard" 
        onChange={e => {setInputName(e.target.value); setSuccess(false)}}
        />
        <Button size='large' variant="contained" onClick={() => handleClick()}>Submit</Button>
      </Box>
      {showSuccess && <SuccessAlert/>}
    </div>
  );
}