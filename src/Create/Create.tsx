import React from "react";
import { Form } from "./form";
import { useAuth0 } from "@auth0/auth0-react";

export const Create = () => {
  const { user } = useAuth0();
  return (
    <>
    <div>
      <p>{user?.email}</p>
      <h1>Register and add your wishlist</h1>
      <Form />
    </div>
    <a href="/">Home</a>
    </>
  );
};
