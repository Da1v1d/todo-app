import { Container } from '@mui/material';
import { Todo } from './components/Todo/Todo';
import { TodoForm } from './components/TodoForm/TodoForm';
import { useAppSelector } from './hooks/hooks';
import { useState } from 'react';
import { ITodo } from './store/todos/types';
import { EditModal } from './components/editModal';

function App() {
  const todos = useAppSelector((state) => state.todo.todos);
  const [editData, setEditData] = useState<ITodo | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  console.log(todos);

  const closeModal = () => {
    console.log('1');
    setOpenModal(false);
  };

  const openModalHandler = (todo: ITodo) => {
    setEditData(todo);
    setOpenModal(true);
  };

  return (
    <>
      <TodoForm />
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} openModalHandler={openModalHandler} />
      ))}
      <EditModal
        open={openModal}
        todo={editData as ITodo}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
