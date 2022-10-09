import React from "react";
import { Form } from "./form";
import { Link } from "react-router-dom";

export const Create = () => (
  <>
    <div>
      <h1>Register and add your wishlist</h1>
      <Form />
    </div>
    <Link to="/">Home</Link>
  </>
);
