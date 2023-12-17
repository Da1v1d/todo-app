export interface ITodo {
  title: string;
  id: string;
  completed: boolean;
  description?: string;
  deadline?: string;
  deleted: boolean;
}

export interface ITodos {
  todos: ITodo[];
}

export type ITodoForm = Omit<ITodo, 'id' | 'completed'>;
