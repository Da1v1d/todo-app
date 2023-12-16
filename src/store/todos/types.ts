export interface ITodo {
  title: string;
  id: string;
  completed: boolean;
  description?: string;
  deadline?: string;
}

export interface ITodos {
  todos: ITodo[];
  deleted?: ITodo[];
}

export type ITodoForm = Omit<ITodo, 'id' | 'completed'>;
