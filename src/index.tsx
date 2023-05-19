import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import MenuMain from './Menu/MenuMain';
import OrdersMain from './Orders/OrdersMain';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"login/",
        element: <Login />
      },
      {
        path:"dashboard/",
        element:<Dashboard />
      },
      {
        path:"menu/",
        element:<MenuMain />
      },
      {
        path:"orders/",
        element:<OrdersMain />
      }
    ]
  },

]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
