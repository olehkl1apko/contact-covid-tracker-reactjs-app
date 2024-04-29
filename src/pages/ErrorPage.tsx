import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col gap-5 items-center justify-center w-screen h-screen">
      <h1 className="font-bold text-2xl small:text-3xl medium:text-4xl large:text-6xl text-red-700">
        Oops
      </h1>
      <p className="font-bold text-3xl text-red-400">
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error occurred. Try to reload this page"}
      </p>
    </div>
  );
};

export default ErrorPage;
