import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import { store } from "./app/store";
import App from "./Home/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Create } from "./Create/Create";
import { Find } from "./Find/Find";
import { Exchange } from "./Exchange/Exchange";
import Error from "./Error/Error";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/create',
        element: <Create />,
      },
      {
        path: '/find',
        element: <Find />,
      },
      {
        path: '/exchange/:exchangeId',
        element: <Exchange />,
      },
    ]
  },
]);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-w0ktumii.us.auth0.com"
      clientId={process.env.REACT_APP_CLIENT_ID || ""}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
