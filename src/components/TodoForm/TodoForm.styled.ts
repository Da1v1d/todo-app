import styled from '@emotion/styled';
import { Button, Stack, TextField } from '@mui/material';
import {blue} from '@mui/material/colors'

export const Input = styled(TextField)({
  width: '100%',
});

export const Form = styled('form')({
  marginTop: '20px',
  background: 'white',
  padding: '25px',
  width: '600px',
  borderRadius: '15px',
  border: `4px solid ${blue[300]}`,
  '@media screen and (max-width: 650px)': {
    width:'90vw',
  },
});

export const FormStack = styled(Stack)({
  width: '100%',
});

export const SubmitButton = styled(Button)({});
