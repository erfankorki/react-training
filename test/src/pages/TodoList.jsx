import { useTodo } from "../components/hooks/todo";

function TodoList() {
  const todo = useTodo();
  return <article>{todo.title}</article>;
}

export default TodoList;
