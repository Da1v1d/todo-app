import { Button } from '@mui/material';
import { ITodo, ITodoForm } from '../../store/todos/types';
import { Form, FormStack, Input } from './TodoForm.styled';
import { useAppDispatch } from '../../hooks/hooks';
import { addTodo, editTodo } from '../../store/todos/todoSlice';
import { generateId } from '../../utils';
import { FC } from 'react';
import { useTodoForm } from '../../hooks/useTodoForm';

export const TodoForm: FC<{
  todo?: ITodo;
  closeModal?: () => void;
}> = ({ todo, closeModal }) => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset, errors, isDirty, isValid } =
    useTodoForm(todo);

  const onSubmit = (data: ITodoForm) => {
    if (todo) {
      dispatch(editTodo({ ...data, completed: todo.completed, id: todo.id }));
      closeModal && closeModal();
    } else {
      dispatch(
        addTodo({
          ...data,
          completed: false,
          id: generateId(),
        })
      );
      reset(
        { title: '', deadline: '', description: '' },
        { keepValues: false }
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormStack spacing={3}>
        <Input
          label='title'
          required
          {...register('title', { required: true })}
        />
        {errors?.title?.message}
        <Input label='description' {...register('description')} multiline />
        <Input type='date' {...register('deadline')} />
        <Button
          disabled={!isDirty || !isValid}
          type='submit'
          variant='contained'
        >
          {todo ? 'edit todo' : 'add todo'}
        </Button>
      </FormStack>
    </Form>
  );
};
