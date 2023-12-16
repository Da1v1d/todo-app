import styled from '@emotion/styled';
import { Card, CardContent } from '@mui/material';
import { FC } from 'react';
import { green, grey } from '@mui/material/colors';
import type { TodoCardType } from './Todo.types';

export const TodoCard: FC<TodoCardType> = styled(Card)((props) => ({
  background: props.completed ? green[100] : grey[100],
  marginTop: '20px',
  maxWidth: '600px',
  borderRadius: '12px',
  '@media screen and (max-width: 650px)': {
    width: '90vw',
  },
}));

export const TodoCardContent = styled(CardContent)({
  display: 'flex',
  justifyContent: 'space-between',
});
