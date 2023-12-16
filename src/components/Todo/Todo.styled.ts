import styled from '@emotion/styled';
import { Card, CardProps } from '@mui/material';
import { FC } from 'react';
import { green, grey } from '@mui/material/colors';

type TodoCardType = CardProps & {
  completed: boolean;
};

export const TodoCard: FC<TodoCardType> = styled(Card)((props) => ({
  background: props.completed ? green[200] : grey[100],
  marginTop: '20px',
  maxWidth: '600px',
  borderRadius:'12px',
  '@media screen and (max-width: 650px)': {
    width: '90vw',
  },
}));
