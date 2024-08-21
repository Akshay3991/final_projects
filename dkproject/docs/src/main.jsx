import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import Otp from './components/Otp.jsx'
import Orders from './components/Orders.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/", element: <Home />
      },
      {
        path: "/cart", element: <Cart />
      },
      {
        path: "/otp", element: <Otp />
      },
      {
        path: "/orders", element: <Orders />
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
