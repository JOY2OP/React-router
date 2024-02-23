import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>               {/*Acts as a parent- fits into <Outlet /> */}
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='github' element={<Github />} />
    <Route path='user/' element={<User />} > 
      <Route path=':userId' element={<User />} /> 
    </Route>
    <Route path='*' element={<div>Not Found</div>} />
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />           {/* Replace this instead of App */}
  </React.StrictMode>,
)
