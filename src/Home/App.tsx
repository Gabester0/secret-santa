import React from "react";
import logo from "./logo.svg";
import { Counter } from "../features/counter/Counter";
import { Form } from "../Create/form";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import { Link } from "react-router-dom";

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
            <Link to={`exchange/${tempExchangeId}`}>Exchange xyz</Link>
          </div>
          <div>
            <p>Join an exchange:</p>
            <Link to={`find`}>Find</Link>
          </div>
          <div>
            <p>Create a gift exchange:</p>
            <Link to={`create`}>Create</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
