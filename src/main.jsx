import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Error from './Pages/Error.jsx';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import UpdateProfile from './Pages/UpdateProfile.jsx';
import Private from './PrivateRoute/Private.jsx';
import HouseRes from './components/Residential/HouseRes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: 
        <Private>
          <Contact></Contact>
        </Private>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/update',
        element: <Private>
          <UpdateProfile></UpdateProfile>
        </Private>
        
      },
      {
        path: '/residntial/:id',
        loader: ()=> fetch('/fakeDataForHouse.json'),
        element: <HouseRes></HouseRes>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </AuthProvider>

  </React.StrictMode>,
)
