import { useRouteError } from "react-router-dom";
import { ErrorContainer } from "./styled";

interface CustomError extends Error {
  statusText: string;
  status: number;
}

export default function Error() {
  const error = useRouteError() as CustomError;
  console.error(error);

  return (
    <ErrorContainer id="error-page">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>{error.status && <i> Status code: {error.status}</i>}</p>
      </div>
    </ErrorContainer>
  );
}
