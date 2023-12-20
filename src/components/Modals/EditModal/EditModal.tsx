import { TodoForm } from '../../TodoForm/TodoForm';
import { FC, memo } from 'react';
import { ITodo } from '../../../store/todos/types';
import { EditDialog } from './EditModal.styled';

type EditModalType = {
  open: boolean;
  todo: ITodo;
  closeModal: () => void;
};

export const EditModal: FC<EditModalType> = memo(
  ({ open, todo, closeModal }) => {
    return (
      <EditDialog open={open} onClose={closeModal}>
        <TodoForm todo={todo} closeModal={closeModal} />
      </EditDialog>
    );
  }
);
