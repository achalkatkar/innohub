import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './View/Home/Home';
import Project from './View/Product/Product'
import Service from './View/Service/Service';
import About from './View/About/About';
import Blog from './View/Blog/Blog';
import Contact from './View/Contact/Contact';
import Login from './View/Login/Login';
import Navbar from './component/Navbar/Navbar';
import FAQ from './FAQ/faq';
import Enroll from './View/enroll/enroll';
import Footer from './component/Footer/Footer';



    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: "/service",
            element: <Service/> ,
        },
        {
            path: "/project",
            element: <Project/> ,
        },
        
        {
            path: "/about",
            element: <About/> ,
        },
        
        {
            path: "/blog",
            element: <Blog/> ,
        },
        
        {
            path: "/contact",
            element: <Contact/> ,
        },
        
        {
            path: "/login",
            element: <Login/> ,
        },

        {
            path: "/faq",
            element: <FAQ/> ,
        },
        {
            path: "/enroll",
            element: <Enroll/> ,
        },

    ])

 

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render( <>
          <Navbar/>
        < RouterProvider router = { router }
          />
          <Footer/>
          
          </>
      );
