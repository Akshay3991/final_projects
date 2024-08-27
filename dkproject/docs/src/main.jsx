import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import FormData from "./components/FormData.jsx";
import Cart from "./routes/Cart.jsx";
import Otp from "./components/Otp.jsx";
import Contact from "./components/Contact.jsx";
import Orders from "./components/Orders.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import dataStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/form",
        element: <FormData />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/otp",
        element: <Otp />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={dataStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
