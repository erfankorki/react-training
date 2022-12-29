import TodoItem from "../components/TodoItem";
import { useTodoStore } from "../stores/todo";

function TodoList() {
  const todoList = useTodoStore((state) => state.list);
  const addItem = useTodoStore((state) => state.addItem);
  const clearList = useTodoStore((state) => state.clearList);

  return (
    <article>
      {todoList.map((item) => {
        return <TodoItem title={item.title} />;
      })}
      <button
        onClick={() => {
          addItem();
        }}
      >
        ADD ITEM
      </button>
      <button
        onClick={() => {
          clearList();
        }}
      >
        CLEAR LIST
      </button>
    </article>
  );
}

export default TodoList;
