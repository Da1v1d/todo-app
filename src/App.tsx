import { Tab, Tabs, Typography } from '@mui/material';
import { Todo } from './components/Todo/Todo';
import { TodoForm } from './components/TodoForm/TodoForm';
import { useAppSelector } from './hooks/hooks';
import { useCallback, useState } from 'react';
import { ITodo } from './store/todos/types';
import { EditModal } from './components/editModal/editModal';
import { Container } from './App.styled';
import { TabContext, TabList, TabPanel } from '@mui/lab';

function App() {
  const { todos, deleted } = useAppSelector((state) => state.todo);
  const [editData, setEditData] = useState<ITodo | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [value, setValue] = useState<string>('0');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const openModalHandler = (todo: ITodo) => {
    setEditData(todo);
    setOpenModal(true);
  };

  return (
    <Container>
      <div style={{ position: 'relative' }}>
        <Typography fontWeight={500} color='white' variant='h1'>
          Todo App
        </Typography>
        <TodoForm />
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab label={`All (${todos?.length})`} value='0' />
            <Tab
              label={`Completed (${
                todos.filter((todo) => todo.completed === true)?.length
              })`}
              value='1'
            />

            <Tab label={`Trash (${deleted?.length})`} value='2' />
          </TabList>
          <TabPanel value='0'>
            {todos?.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                openModalHandler={openModalHandler}
              />
            ))}
          </TabPanel>
          <TabPanel value='1'>
            {todos
              .filter((todo) => todo.completed === true)
              ?.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  openModalHandler={openModalHandler}
                />
              ))}
          </TabPanel>

          <TabPanel value='2'>
            {deleted?.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                openModalHandler={openModalHandler}
              />
            ))}
          </TabPanel>
        </TabContext>

        {openModal && (
          <EditModal
            open={openModal}
            todo={editData as ITodo}
            closeModal={closeModal}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
