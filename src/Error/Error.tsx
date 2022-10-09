import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message || JSON.stringify(error)}</i>
      </p>
    </div>
  );
}