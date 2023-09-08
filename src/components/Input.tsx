import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


type inputtype = {
  label: string,
  variant: string,
  onChange: () => void,
  required: boolean,
  type: string,




}
export default function Input(props: inputtype) {
  const { label, onChange, type, required, variant } = props;
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label={label}
        required={required}
        onChange={onChange}
        type={type}
      />

    </Box>
  );
}