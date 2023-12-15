import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ITodo, ITodoForm } from '../../store/todos/types';
import { Form, FormStack, Input } from './TodoForm.styled';
import { useAppDispatch } from '../../hooks/hooks';
import { addTodo } from '../../store/todos/todoSlice';
import { generateId } from '../../utils';
import { FC } from 'react';

export const TodoForm: FC<Partial<ITodo>> = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<Omit<ITodo, 'id' | 'completed'>>({
    defaultValues: {
      title: '',
      deadline: undefined,
      description: '',
    },
  });

  const onSubmit = (data: ITodoForm) => {
    dispatch(
      addTodo({
        ...data,
        completed: false,
        id: generateId(),
      })
    );
  };

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
          add todo
        </Button>
      </FormStack>
    </Form>
  );
};
