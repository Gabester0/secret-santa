import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const Exchange = () => {
  const { user } = useAuth0();
  return (
    <>
    <div>
      <p>{user?.email}</p>
      <h1>Manage XYZ gift exchange</h1>
    </div>
    <Link to="/">Home</Link>
    </>
  );
};
