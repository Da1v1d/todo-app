import { useForm } from 'react-hook-form';
import { ITodo, ITodoForm } from '../store/todos/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const useTodoForm = (defaultValues?: ITodo) => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .max(20, 'Title must be at most 20 characters')
      .required('Title is required'),
    description: yup.string().notRequired(),
    deadline: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<ITodoForm>({
    defaultValues: {
      title: defaultValues?.title,
      deadline: defaultValues?.deadline,
      description: defaultValues?.description,
    },
    mode: 'onChange',
    // @ts-ignore FIX: Need to fix yup resolver error when we add notRequired
    resolver: yupResolver(schema),
  });
  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    isValid,
    reset,
  };
};
