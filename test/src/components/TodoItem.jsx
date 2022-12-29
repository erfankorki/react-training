import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const TodoItem = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <p>
      {props.title}: {theme}
    </p>
  );
};

export default TodoItem;
