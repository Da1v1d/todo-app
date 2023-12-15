import { Dialog } from '@mui/material';
import { TodoForm } from '../TodoForm/TodoForm';
import { FC } from 'react';

type EditModalType = {
  open: boolean;
};

export const EditModal: FC<EditModalType> = ({ open }) => {
  return (
    <Dialog open={open}>
      <TodoForm />;
    </Dialog>
  );
};
