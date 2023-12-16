import { FC } from 'react';
import { ITodo } from '../../store/todos/types';
import { Card, CardContent } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../hooks/hooks';
import { deleteTodo } from '../../store/todos/todoSlice';

type TodoComponentType = {
  todo: ITodo;
  openModalHandler: (todo: ITodo) => void;
};

export const Todo: FC<TodoComponentType> = ({ todo, openModalHandler }) => {
  const { title, description, deadline, completed, id } = todo;
  const dispatch = useAppDispatch();
  return (
    <Card
      style={{
        marginTop: '10px',
        background: 'rgba(0,0,0,0.05)',
        maxWidth: '440px',
      }}
    >
      <CardContent onClick={() => openModalHandler(todo)}>
        <div>{title}</div>
        <div>{description}</div>
        <div>{deadline && new Date(deadline).toLocaleDateString()}</div>
        <div>{completed}</div>
      </CardContent>
      <IconButton onClick={() => dispatch(deleteTodo(id))}>
        <DeleteIcon color='error' />
      </IconButton>
    </Card>
  );
};
