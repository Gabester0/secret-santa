import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Form } from "./features/form";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";


function App() {
  const { loginWithRedirect } = useAuth0();
  console.log(process.env.REACT_APP_CLIENT_ID);
  return (
    <div className="App">
      <button onClick={() => loginWithRedirect()}>Log In</button>
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/*<Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
      {/* </header> */}
      <body>
        <h1>Register and add your wishlist</h1>
        <Form />
      </body>
    </div>
  );
}

export default App;
