import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RootWrapper, Sidebar, Content } from "./styled";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

function Root() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  useEffect(() => {
    axios.get('http://localhost:3001').then((response) => {
      console.log({response});
    }).catch((error)=> {
      console.log({error})
    })
  }, []);

  const tempExchangeId = `xyz`;
  return (
    <>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
      {isAuthenticated && !isLoading && (
        <RootWrapper>
          <Sidebar>
            <p>
              Logged in as: 
              <br />
              <i>{user?.email}</i>
            </p>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
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
          </Sidebar>
          <Content>
            <Outlet />
          </Content>
        </RootWrapper>
      )}
    </>
  );
}

export default Root;
