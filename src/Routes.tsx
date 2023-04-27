import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Calendar from "./pages/Calendar/Calendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
