import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center mt-72 space-y-6">
      <h1 className="text-9xl">Oops!</h1>
      <p className="text-4xl">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-7xl">{error.status}</i>
        <br />
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
