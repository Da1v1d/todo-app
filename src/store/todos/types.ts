export interface ITodo {
  title: string;
  id: string;
  completed: boolean;
  description?: string;
  deadline?: Date;
}

export interface ITodos {
  todos: ITodo[];
  deleted?: ITodo[];
}

export type ITodoForm = Omit<ITodo, 'id' | 'completed'>;
