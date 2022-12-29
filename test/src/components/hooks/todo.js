import { useEffect, useState } from "react";

export function useTodo() {
  const [todo, setTodo] = useState({
    title: "Doing Something...",
  });

  useEffect(() => {
    setTimeout(() => {
      setTodo({
        title: "Done Something...",
      });
    }, 3000);
  });
  return todo;
}
