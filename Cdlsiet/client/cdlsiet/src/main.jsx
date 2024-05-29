import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Pyq from './components/Pyq.jsx'
import Notes from './components/Notes.jsx'
import Syllabus from './components/Syllabus.jsx'
import CreatePost from './components/CreatePost.jsx'
import Post from './components/Post.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/home", element: <Home />,
      },
      {
        path: "/post", element: <Post />,
      },
      {
        path: "/about", element: <About />
      },
      {
        path: "/pyq", element: <Pyq />
      },
      {
        path: "/syllabus", element: <Syllabus />
      },
      {
        path: "/notes", element: <Notes />
      },
      {
        path: "/create-post", element: <CreatePost />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
