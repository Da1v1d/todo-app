import { Dialog } from '@mui/material';
import { TodoForm } from '../TodoForm/TodoForm';
import { FC } from 'react';
import { ITodo } from '../../store/todos/types';

type EditModalType = {
  open: boolean;
  todo: ITodo;
  closeModal: () => void;
};

export const EditModal: FC<EditModalType> = ({ open, todo, closeModal }) => {
  return (
    <Dialog open={open} onClose={closeModal}>
      <TodoForm todo={todo} closeModal={closeModal} />
    </Dialog>
  );
};
