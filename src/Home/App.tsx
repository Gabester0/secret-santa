import React from "react";
import logo from "./logo.svg";
import { Counter } from "../features/counter/Counter";
import { Form } from "../Create/form";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();
  
  const tempExchangeId = `xyz`;
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
          {/* Conditionally render if exchanges exist */}
          <div>
            <p>Your gift exchanges:</p>
            {/* Map exchanges out as ul of a tags */}
            <a href={`exchange/${tempExchangeId}`}>Exchange xyz</a>
          </div>
          <div>
            <p>Join an exchange:</p>
            <a href={`find`}>Find</a>
          </div>
          <div>
            <p>Create a gift exchange:</p>
            <a href={`create`}>Create</a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
