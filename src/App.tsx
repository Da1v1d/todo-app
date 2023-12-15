import { Container } from '@mui/material';
import { Todo } from './components/Todo/Todo';
import { TodoForm } from './components/TodoForm/TodoForm';
import { useAppSelector } from './hooks/hooks';

function App() {
  const todos = useAppSelector((state) => state.todo.todos);

  return (
    <Container>
      <TodoForm />
      {todos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Container>
  );
}

export default App;
