import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Form } from "./features/form";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();
  return (
    <div className="App">
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
      {isAuthenticated && !isLoading && (
        <>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
          <p>{user?.email}</p>
          <h1>Register and add your wishlist</h1>
          <Form />
        </>
      )}
    </div>
  );
}

export default App;
