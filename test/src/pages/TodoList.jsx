import { useTodoStore } from "../stores/todo";

function TodoList() {
  const todoList = useTodoStore((state) => state.list);
  const addItem = useTodoStore((state) => state.addItem);
  const clearList = useTodoStore((state) => state.clearList);

  
  return (
    <article>
      {todoList.map((item) => {
        return <p>{item.title}</p>;
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
