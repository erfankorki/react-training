import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages";
import TodoList from "./pages/TodoList";
import Animate from "./pages/animate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/todo-list",
        element: <TodoList />,
      },
      {
        path: "/animate",
        element: <Animate />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
