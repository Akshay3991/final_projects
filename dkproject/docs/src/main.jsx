import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/home", element: <Home />,
      },
      {
        path: "/about", element: <About />
      },
      {
        path: "/services", element: <Work />
      },
      {
        path: "/contact", element: <Contact />
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
