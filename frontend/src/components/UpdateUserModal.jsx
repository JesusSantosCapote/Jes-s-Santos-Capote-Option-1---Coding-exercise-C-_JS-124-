import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from '../axios'
import Typography from '@mui/material/Typography';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UpdateUserModal({id, handleUpdate}) {
  const [open, setOpen] = React.useState(false);
  const [nameInput, setName] = React.useState("")
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
        <Button variant='contained' size='small' onClick={handleOpen}><ModeEditOutlineOutlinedIcon /></Button>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
              <Box
                  component="form"
                  sx={style}
                  noValidate
                  autoComplete="off"
              >
                  <TextField id="outlined-basic" label="Name" variant="standard" 
                  onChange={e => setName(e.target.value)}
                  />
                  <br/>
                  <br/>
                  <Button size='large' variant="contained" onClick={() => handleUpdate({id:id, name:nameInput})}>Submit</Button>
              </Box>
          </Modal>
      </Box>
  );
}
