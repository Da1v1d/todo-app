import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ITodo, ITodoForm } from '../../store/todos/types';
import { Form, FormStack, Input } from './TodoForm.styled';
import { useAppDispatch } from '../../hooks/hooks';
import { addTodo, editTodo } from '../../store/todos/todoSlice';
import { generateId } from '../../utils';
import { FC } from 'react';
import { useFormHook } from '../../hooks/useForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const TodoForm: FC<{
  todo?: ITodo;
  closeModal?: () => void;
}> = ({ todo, closeModal }) => {
  const dispatch = useAppDispatch();

  //FIX: Need to fix yup resolver error when we add notRequired
  const schema = yup.object().shape({
    title: yup
      .string()
      .max(20, 'Title must be at most 20 characters')
      .required('Title is required'),
    description: yup.string().notRequired(),
    deadline: yup.date().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<Omit<ITodo, 'id' | 'completed'>>({
    defaultValues: {
      title: todo?.title,
      deadline: todo?.deadline,
      description: todo?.description,
    },
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data: ITodoForm | ITodo) => {
    if (todo) {
      dispatch(
        editTodo({ ...data, completed: todo.completed, id: todo.id } as ITodo)
      );
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
