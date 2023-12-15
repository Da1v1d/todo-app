import { FC } from 'react';
import { ITodo } from '../../store/todos/types';

export const Todo: FC<Omit<ITodo, 'id'>> = ({
  title,
  description,
  deadline,
  completed,
}) => {
  console.log(deadline && new Date(deadline).getFullYear());
  
  return (
    <>
      <div>{title}</div>
      <div>{description}</div>
      <div>{deadline && new Date(deadline).getFullYear()}</div>
    </>
  );
};
