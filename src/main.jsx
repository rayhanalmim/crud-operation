import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Users from './Users.jsx';
import UpdateData from './UpdateData.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/user',
        element:<Users></Users>,
        loader: () => fetch('http://localhost:3000/user')
      },
      {
        path:'/user/:id',
        element:<UpdateData></UpdateData>,
        loader: ({params}) => fetch(`http://localhost:3000/user/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
