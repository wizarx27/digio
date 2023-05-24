import React, { useEffect, useLayoutEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider,Outlet, useNavigate,useLocation } from 'react-router-dom';
import Login from './Login/Login';
import { useWindowSize } from './hooks';
import NavbarWrapper from './Dashboard/component/Navbar/NavbarWrapper';
import Sidebar from './Dashboard/component/Sidebar/Sidebar';


function App() {
  
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(()=>{
    document.title = 'Digio';
    if (location.pathname === "/") navigate("/login")
  },[])
  return (
    <div className="App">
      {location.pathname !== "/login" ? (
        <>
          <NavbarWrapper />
          <div className='d-flex h-100'>
            <Sidebar />
            <Outlet />
          </div>
        </>

      ) : <Outlet />}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Digio</p>
      </header> */}
    </div>
  );
}

export default App;
