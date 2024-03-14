import { Navigate, Outlet, RouteObject, useRouteError } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { RequireAuthProps } from "../types/route.types";

export const MainLayout = () => {
  return (
    <Layout>
      <Outlet></Outlet>
    </Layout>
  );
};

export const ErrorBoundary = () => {
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

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const isAuthUser = false;
  //isAuth();

  if (!isAuthUser) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};
