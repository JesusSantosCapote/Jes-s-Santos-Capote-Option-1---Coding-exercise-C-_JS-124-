import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function TextInputWithButton({button_text, input_label, handleClick}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={input_label} variant="standard" />
      <Button size='large' variant="contained" onClick={() => handleClick()}>{button_text}</Button>
    </Box>
  );
}