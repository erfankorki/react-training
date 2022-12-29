import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages";
import TodoList from "./pages/TodoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/todo-list",
        element: <TodoList />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
