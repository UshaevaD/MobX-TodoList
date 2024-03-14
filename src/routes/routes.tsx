import { Outlet, RouteObject } from "react-router-dom";
import Registration from "../pages/Registration";
import { ErrorBoundary, MainLayout, RequireAuth } from ".";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const route: RouteObject[] = [
  {
    path: "",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        children: [
          {
            path: "",
            element: (
              <>
                <Home />
                <Outlet></Outlet>
              </>
            ),
          },
        ],
      },
      {
        path: "login",
        children: [
          {
            path: "",
            element: (
              <>
                <Login />
                <Outlet></Outlet>
              </>
            ),
          },
        ],
      },
      {
        path: "registration",
        children: [
          {
            path: "",
            element: (
              <>
                <Registration />
                <Outlet></Outlet>
              </>
            ),
          },
        ],
      },
      {
        path: "todo-list",
        children: [
          {
            path: "",
            element: (
              <RequireAuth>
                <>
                  <div>Todo-list</div>
                  <Outlet></Outlet>
                </>
              </RequireAuth>
            ),
          },
        ],
      },
    ],
  },
];