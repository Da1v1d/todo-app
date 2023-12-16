import { useForm } from 'react-hook-form';
import { useAppDispatch } from './hooks';
import { ITodo, ITodoForm } from '../store/todos/types';
import { addTodo } from '../store/todos/todoSlice';
import { generateId } from '../utils';

export const useFormHook = (defaultValues: any) => {
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
  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    isValid,
    onSubmit,
  };
};
