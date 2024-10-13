export type TodoType = {
  title: string;
  date: Date;
  done: boolean;
};

export type TodoListActionsType = {
  updateTodoStatus: (date: Date) => void;
  removeTodo: (date: Date) => void;
};
