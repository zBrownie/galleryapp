import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

export function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainTemplate />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
