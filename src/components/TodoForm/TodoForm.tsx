import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ITodo, ITodoForm } from '../../store/todos/types';
import { Form, FormStack, Input } from './TodoForm.styled';
import { useAppDispatch } from '../../hooks/hooks';
import { addTodo, editTodo } from '../../store/todos/todoSlice';
import { generateId } from '../../utils';
import { FC } from 'react';
import { useFormHook } from '../../hooks/useForm';

export const TodoForm: FC<{
  todo?: ITodo;
  closeModal?: () => void;
}> = ({ todo, closeModal }) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<Omit<ITodo, 'id' | 'completed'>>({
    defaultValues: {
      title: todo?.title,
      deadline: todo?.deadline,
      description: todo?.description,
    },
  });

  const onSubmit = (data: ITodoForm | ITodo) => {
    if (todo) {
      dispatch(editTodo({ ...data, id: todo.id } as ITodo));
      closeModal && closeModal();
    } else {
      dispatch(
        addTodo({
          ...data,
          completed: false,
          id: generateId(),
        })
      );
    }
  };

  // const { onSubmit } = useFormHook();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormStack spacing={3}>
        <Input
          label='title'
          required
          {...register('title', { required: true })}
        />
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
