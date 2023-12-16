import { FC } from 'react';
import { ITodo } from '../../store/todos/types';
import { CardActions, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useAppDispatch } from '../../hooks/hooks';
import { completeTodo, deleteTodo } from '../../store/todos/todoSlice';
import { TodoCard, TodoCardContent } from './Todo.styled';

type TodoComponentType = {
  todo: ITodo;
  openModalHandler: (todo: ITodo) => void;
};

export const Todo: FC<TodoComponentType> = ({ todo, openModalHandler }) => {
  const { title, description, deadline, completed, id } = todo;
  const dispatch = useAppDispatch();
  return (
    <TodoCard completed={completed}>
      <TodoCardContent>
        <div>
          <Typography variant='h4'>{title.toUpperCase()}</Typography>
          <Typography variant='body1'>{description}</Typography>
          <Typography>
            {deadline && 'deadline: ' + new Date(deadline).toLocaleDateString()}
          </Typography>
        </div>
        <CardActions>
          <IconButton onClick={() => openModalHandler(todo)}>
            <EditIcon color='primary' />
          </IconButton>
          {!completed && (
            <IconButton onClick={() => dispatch(completeTodo(id))}>
              <CheckCircleIcon color='success' />
            </IconButton>
          )}
          <IconButton onClick={() => dispatch(deleteTodo(id))}>
            <DeleteIcon color='warning' />
          </IconButton>
        </CardActions>
      </TodoCardContent>
    </TodoCard>
  );
};
