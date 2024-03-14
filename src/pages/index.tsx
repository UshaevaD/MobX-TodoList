import { Navigate, Outlet, RouteObject, useRouteError } from "react-router-dom";
import { Layout } from "../layout/Layout";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import { RequireAuthProps } from "../types/route.types";

const MainLayout = () => {
  return (
    <Layout>
      <Outlet></Outlet>
    </Layout>
  );
};

const ErrorBoundary = () => {
  const error = useRouteError() as Error;

  return (
    <Layout>
      <h1>Page was Not Found</h1>

      <pre>{error.message || JSON.stringify(error)}</pre>

      <button onClick={() => (window.location.href = "/")}>
        Click to go to main page
      </button>
    </Layout>
  );
};

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const isAuthUser = false;
  //isAuth();

  if (!isAuthUser) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

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
