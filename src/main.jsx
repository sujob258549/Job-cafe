import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShowDetail from './Component/ShowDetails/ShowDetail.jsx';
import Fastpage from './Component/Home/Fastpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,


    children: [
      {
        path: "/",
        element: <Fastpage></Fastpage>,
        loader: () => fetch('../public/jobs.json'),
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/detail',
        element: <ShowDetail></ShowDetail>
      },
      {
        path: "/show/:id",
        element: <ShowDetail></ShowDetail>,
        loader: () => fetch('../public/jobs.json'),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
