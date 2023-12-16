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
    <Dialog
      open={open}
      onClose={closeModal}
      sx={{
        '.MuiPaper-root': {
          borderRadius: '12px',
          padding: '30px 14px',
        },
        form: { border: 'none',maxWidth:'100%' },
      }}
    >
      <TodoForm todo={todo} closeModal={closeModal} />
    </Dialog>
  );
};
