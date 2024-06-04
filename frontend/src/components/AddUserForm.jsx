import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
export default function AddUserForm({handleInsert}) {
  const [inputId, setInputId] = useState("")
  const [inputName, setInputName] = useState("")

  return (
    <Box>
      <Typography variant='h2'>Add new User</Typography>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Id" variant="standard" 
        onChange={e => setInputId(e.target.value)}
        />

        <TextField id="outlined-basic" label="Name" variant="standard" 
        onChange={e => setInputName(e.target.value)}
        />
        <Button size='large' variant="contained" onClick={() => handleInsert(inputId, inputName)}>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography sx={{marginRight:"8px"}}>Submit</Typography>
            <SendRoundedIcon />
          </Box>
        </Button>
      </Box>
    </Box>
  );
}