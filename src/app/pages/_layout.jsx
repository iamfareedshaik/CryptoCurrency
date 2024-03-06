import { isRouteErrorResponse, Outlet, useRouteError } from "react-router-dom";
import { AuthLayout } from "../layout/auth";
export const RootLayout = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export const RootErrorElement = () => {
  const err = useRouteError();
  console.log({ err });
  return (
    <div>
      {isRouteErrorResponse(err) ? (
        <h1>{err.status}</h1>
      ) : (
        <h1> Something Went Wrong</h1>
      )}
    </div>
  );
};
