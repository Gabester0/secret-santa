import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Exchange = () => {
  const { user } = useAuth0();
  return (
    <>
    <div>
      <p>{user?.email}</p>
      <h1>Manage exchange XYZ</h1>
    </div>
    <a href="/">Home</a>
    </>
  );
};
